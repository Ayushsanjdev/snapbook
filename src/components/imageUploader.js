import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InprogressBar from './Inprogressbar';

const ImageUploader = ({snap, setSnap, showPopup, setShowPopup, toggleHidePopup }) => {
  
  const [error, setError] = useState(null);

  const addSnapHandler = (e) => {
    setSnap(URL.createObjectURL(e.target.files[0]));
  }

  return (
    showPopup === true ? 
    <section>
      <motion.div
        animate={{ scale: 1.1 }}>

        <div className="popupDiv">
          <button className="closeBtn" onClick={toggleHidePopup}>❌</button>
          <p>Upload Your Snap to snapbook</p>
          <small style={{fontSize: '0.7rem'}}>
            file should be in jpeg/png/img format
          </small>
          
          <div className="dropZone">
            <img  
              src={snap !== null ? snap : 
              "https://img.icons8.com/plasticine/250/000000/image.png"} 
              alt="drop your img here" 
              className="uploadImage" />
            <br/>
              {snap === null ? 
            <small>Drag & drop your image here</small>
              : ""}
          </div>

          <label htmlFor="files" className="chooseFile">
            <input 
              id="files" type="file" accept=" image/* "
              onChange={addSnapHandler} />
              Choose local Snap
          </label>

          {snap !== null ?
          <InprogressBar
            snap={snap}
            setSnap={setSnap} />
            : ''}

          {/* <button
            className={snap !== null ? "uploadBtn" : "hideView"}>
              uploading...
          </button> */}
        </div>
      </motion.div>
    </section>
    : ''
      )
}

export default ImageUploader;