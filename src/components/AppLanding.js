import React, { useState } from 'react';
import ImageUploader from './imageUploader';
import AllImages from './allImages';

const Entry = ({snap,setSnap}) => {

  const [showPopup, setShowPopup] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [showImg, setShowImg] = useState(false);
  const [showEntry, setshowEntry] = useState(false);

  const toggleShowPopup  = () => {
    setShowPopup(true);
  }

  const toggleHidePopup = () => {
    setShowPopup(false);
  }

  return (
    <div>

      <figure>
        <img src="https://i.ibb.co/6nCZ7RV/Snapbook.png" alt="snapbook banner" />
      </figure>

      <div className="addSnapArea">
        <h2>Add your first Snap to Snapbook</h2>
        <button 
          className="addBtn"
          onClick={toggleShowPopup}>Start</button>
      </div>

      <ImageUploader
        snap={snap}
        setSnap={setSnap}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        toggleHidePopup={toggleHidePopup} />

      
      <AllImages
        snap={snap}
        setSnap={setSnap}
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg} >
          {selectedImg 
          && (<img src={selectedImg} alt={selectedImg.name} />)}
      </AllImages>
      
    </div>
  )
}

export default Entry;