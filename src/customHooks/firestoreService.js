import {projectFirestore} from '../firebaseConfig/firebaseConfig';
import { useState, useEffect } from 'react';

const useFirestoreService = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore
    .collection(collection)
    .orderBy('createdAt', 'desc')
    .onSnapshot((snapshot) => {
      let documents = [];
      snapshot.forEach((doc) => {
        documents.push({...doc.data(), id: doc.id});
      });
      setDocs(documents)
    });

    return () =>
      unsub();
      //this is a cleanup func that react will will run when
      // a comp using the hook unmounts
      
  }, [collection]);

  return {docs};
}

export default useFirestoreService;

