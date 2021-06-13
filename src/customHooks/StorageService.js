import { useState, useEffect } from 'react';
import { projectFirestore, projectStorage, timestamp } from '../firebaseConfig';

//creating a custom hook with passing file as an argument

const useStorageService = (snap) => {

  // using state for ProgressBar, errors and url
  const [inProgress, setInProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  // running useeffect for storing images and also showing the 
  //progress bar while uploading to storage
  useEffect(() => {
  projectStorage.ref(snap.name).put(snap).on(
    "state_changed", (snapshot) =>{
      setInProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    },
    (err) => {
      setError(err);
    },

    // running to update the url and timestamp to firestore while not breaking the code/promise
    async () => {
      const url = await projectStorage.ref(snap.name).getDownloadURL(); //blob name
      const createdAt =  timestamp();
      await projectFirestore.collection('allImages').add({url, createdAt});
      setUrl(url);
    }
  )}, [snap])

  return {inProgress, url, error};
}

export default useStorageService;