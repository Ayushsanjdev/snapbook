import React from 'react';
import ImageUploader from './imageUploader';

const Entry = ({snap, setSnap}) => {
  return (
    <div>
    
      <figure>
        <img src="https://i.ibb.co/6nCZ7RV/Snapbook.png" alt="snapbook banner" />
      </figure>
      
      <ImageUploader
        snap={snap}
        setSnap={setSnap} />
      
    </div>
  )
}

export default Entry;