import React, { useState } from 'react';
import ImageUploader from './imageUploader';

const Entry = ({snap,setSnap}) => {

  const [showPopup, setShowPopup] = useState(false);

  const toggleShowPopup  = () => {
    setShowPopup(true);
  }

  const toggleHidePopup = () => {
    setShowPopup(false);
    setSnap(null);
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
          onClick={toggleShowPopup}>Add Snap</button>
      </div>

      <ImageUploader
        snap={snap}
        setSnap={setSnap}
        showPopup={showPopup}
        toggleHidePopup={toggleHidePopup} />
      
    </div>
  )
}

export default Entry;