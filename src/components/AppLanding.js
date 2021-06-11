import React from 'react';
import ImageUploader from './imageUploader';

const Entry = ({snap, setSnap}) => {
  return (
    <div>

      <figure>
        <img src="https://i.ibb.co/6nCZ7RV/Snapbook.png" alt="snapbook banner" />
      </figure>

      <div className="addSnapArea">
        <h2>Add your first Snap to Snapbook</h2>
        <button className="addBtn">Add Snap</button>
      </div>
      
      
      <ImageUploader
        snap={snap}
        setSnap={setSnap} />
      
    </div>
  )
}

export default Entry;