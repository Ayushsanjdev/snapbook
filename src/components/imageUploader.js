import React from "react";
import { motion } from "framer-motion";
import InprogressBar from "./Inprogressbar";

const ImageUploader = ({
  snap,
  setSnap,
  showPopup,
  setShowPopup,
  toggleHidePopup
}) => {
  const addSnapHandler = (e) => {
    setSnap(e.target.files[0]);
  };

  return showPopup === true ? (
    <section>
      <motion.div animate={{ scale: 1.1 }}>
        <div className="popupDiv">
          <button
            className={snap === null ? "closeBtn" : "hideView"}
            onClick={toggleHidePopup}
          >
            ❌
          </button>

          <p>Upload Your Snap to snapbook</p>
          <small style={{ fontSize: "0.7rem" }}>
            file should be in jpeg/png/img format
          </small>

          <div className="dropZone">
            <img
              src={snap !== null ? URL.createObjectURL(snap) : ""}
              alt="Your img will show here"
              className="uploadImage"
            />
          </div>

          <label htmlFor="files" className="chooseFile">
            <input
              id="files"
              type="file"
              accept=" image/* "
              onChange={addSnapHandler}
            />
            Choose local Snap
          </label>

          <p className={snap !== null ? "uploadBtn" : "hideView"}>
            uploading...
          </p>

          {snap !== null ? (
            <InprogressBar
              snap={snap}
              setSnap={setSnap}
              setShowPopup={setShowPopup}
            />
          ) : (
            ""
          )}
        </div>
      </motion.div>
    </section>
  ) : (
    ""
  );
};

export default ImageUploader;
