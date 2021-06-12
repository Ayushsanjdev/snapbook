import { useState, useEffect } from 'react';
import {projectFirestore, projectStorage, timestamp } from '../firebaseBaas/firebaseConfig';

const useStorageService = (file) => {

  const [inProgress, setInProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
  projectStorage.ref(file.name).put(file).on(
    "state_changed", (snapshot) =>{
      setInProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    },
    (err) => {
      setError(err);
    },
    async () => {
      const url = await projectStorage.ref(file.name);
      const createdAt =  timestamp();
      await projectFirestore.collection('allImages').add({url, createdAt});
      setUrl(url);
    }
  )}, [file])

  return {inProgress, url, error};
}

export default useStorageService;