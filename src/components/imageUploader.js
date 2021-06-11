import React from 'react';
import UploadToStorage from '../firebaseBaas/StorageService';

const ImageUploader = ({snap, setSnap, inProgress, setInProgress}) => {

  const addSnapHandler = (e) => {
    setSnap(URL.createObjectURL(e.target.files[0]));
  }


  return(
    <section>
      <h2>Add your first Snap to Snapbook</h2>
      <button className="addBtn">Add Snap</button>
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

        <label htmlFor="files" className="chooseFile">
          <input 
            id="files" type="file" accept=" image/* "
            onChange={addSnapHandler} />
            Choose local Snap
        </label>
        
        <UploadToStorage
          snap={snap} />
        </div>
      </section>
  )
}

export default ImageUploader;