import React from 'react';
// import { storage } from '../firebaseBaas/firebaseConfig';

const UploadToStorage = ({snap}) => {
  return (
    <div>
      <button 
        className={snap !== null ? "uploadBtn" : "hideView"}>
        Upload Snap
      </button>
    </div>
  )
}

export default UploadToStorage;