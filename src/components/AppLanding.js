import React, { useState } from 'react';
import ImageUploader from './imageUploader';

const Entry = ({snap, setSnap}) => {

  const [popup, setPopup] = useState(false);

  const addPopup = () => {
    return setPopup(
      <ImageUploader
        snap={snap}
        setSnap={setSnap} />
    )
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
          onClick={addPopup}>Add Snap</button>
      </div>
      
    </div>
  )
}

export default Entry;