import React from "react";
import useFirestoreService from "../customHooks/firestoreService";
import { motion } from "framer-motion";

const AllImages = ({setSelectedImg}) => {

  const { docs } = useFirestoreService("allImages");

  return(
    
    <div className="imageGrid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="imageWrap"
            key={doc.id}
            layout
            whileHover={{opacity: 1}}
            onClick={() => setSelectedImg(doc.url)}>
            
            <motion.img 
              src={doc.url}
              alt="snaps"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.5}} />
            </motion.div> 
        ))} 
    </div>
  )
}

export default AllImages;

