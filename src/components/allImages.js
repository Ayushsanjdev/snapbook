import React from "react";
import useFirestoreService from "../customHooks/firestoreService";
import { motion } from "framer-motion";

const AllImages = ({ setSelectedImg, toggleShowPopup }) => {
  const { docs } = useFirestoreService("allImages");

  return (
    <>
      <header>
        <h1>Snapbook</h1>
        <button className="addMoreBtn" onClick={toggleShowPopup}>
          Add More
        </button>
      </header>
      <div className="imageGrid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="imageWrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt="snaps"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default AllImages;
