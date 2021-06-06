import React from 'react';

const ImageUploader = ({snap, setSnap}) => {

  const handleChange = (e) => {
    e.target.files ? 
    setSnap({
      image: URL.createObjectURL(e.target.files[0])
    }) 
    : console.log("something broke");
  }


  return(
    <div className="popupDiv">
        <p>Upload Your Snap to snapbook</p>
        <small>file should be in jpeg/png/img format</small>

        <div className="dropZone">
          <img 
            style={{opacity: '0.6'}} 
            src={snap !== null ? snap.image 
            : "https://img.icons8.com/plasticine/250/000000/image.png"} alt="drop your img here" 
            className="uploadImage" />
          <br/>
          {snap === null ? 
          <small>Drag & drop your image here</small>
          : ""}
        </div>

        <small>or</small>
        <br/><br/>

        <label htmlFor="files" className="chooseFile">
        <input 
           id="files" type="file" accept=" image/* "
           onChange={handleChange} />
        Choose local Snap</label>
        <br/>
        <button className={snap !== null ? "uploadBtn" : "hideView"}>Upload Snap</button>
      </div>
  )
}

export default ImageUploader;