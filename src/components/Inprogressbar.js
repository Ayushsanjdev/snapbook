import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import useStorageService from '../customHooks/StorageService';

const InprogressBar = ({ snap, setSnap, setShowPopup }) => {
  const { inProgress, url } = useStorageService(snap);

  useEffect(() => {
    if(url) {
      setSnap(null)  
    } else if (inProgress === 100) {
      setShowPopup(false)
    }
  }, [url, setSnap, inProgress, setShowPopup]);

  return(
    <motion.div
      className="progressBar"
      initial={{width: 0}}
      animate={{width: inProgress + "%"}}>
    </motion.div>
  )
}

export default InprogressBar;