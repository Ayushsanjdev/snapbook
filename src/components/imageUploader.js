import React, { useEffect } from 'react';
import { storage } from '../firebaseBaas/firebaseConfig';

const ImageUploader = ({snap, setSnap, inProgress, setInProgress}) => {

  useEffect(() => {

  })

  const addSnapHandler = (e) => {
    setSnap(URL.createObjectURL(e.target.files[0]));
  }

  const uploadHandler = (snap) => {
    storage.ref(snap).then((snapshot) => {
      console.log("uploaded a blob or file!");
    })
  }


  return(
    <div className="popupDiv">
      <p>Upload Your Snap to snapbook</p>
      <small>file should be in jpeg/png/img format</small>

      <div className="dropZone">
        <img  
          src={snap !== null ? snap 
          : "https://img.icons8.com/plasticine/250/000000/image.png"} 
          alt="drop your img here" 
          className="uploadImage" />
        <br/>
          {snap === null ? 
        <small>Drag & drop your image here</small>
          : ""}
      </div>

      <small>or</small>
      <br/>
      <br/>
      
      <label htmlFor="files" className="chooseFile">
        <input 
          id="files" type="file" accept=" image/* "
          onChange={addSnapHandler} />
          Choose local Snap
      </label>
      <br/>
      <button 
        className={snap !== null ? "uploadBtn" : "hideView" } onClick={uploadHandler} >Upload Snap</button>
      </div>
  )
}

export default ImageUploader;