import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import useStorageService from '../customHooks/StorageService';

const InprogressBar = ({ snap, setSnap }) => {
  const { inProgress, url } = useStorageService(snap);

  useEffect(() => {
    if(url) {
      setSnap(null)
    }
  }, [url, setSnap]);

  return(
    <motion.div
      className="progressBar"
      initial={{width: 0}}
      animate={{width: inProgress + "%", scale: 1.1}}>
    </motion.div>
  )
}

export default InprogressBar;