import React from 'react';

const ImageUploader = () => {
  return(
    <div className="popupDiv">
        <p>Upload Your Snap to snapbook</p>
        <small>file should be in jpeg/png/img format</small>
        <div className="dropZone">
          <img style={{opacity: '0.6'}} src="https://img.icons8.com/plasticine/250/000000/image.png" alt="drop your img here" />
          <br/>
          <small>Drag & drop your image here</small>
        </div>
        <button 
          className="chooseBtn">Choose your Snap</button>
      </div>
  )
}

export default ImageUploader;