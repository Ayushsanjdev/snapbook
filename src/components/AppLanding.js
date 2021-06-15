import React, { useState } from "react";
import ImageUploader from "./imageUploader";
import AllImages from "./allImages";

const Entry = ({ snap, setSnap }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [showSnapbook, setShowSnapbook] = useState(false);

  const toggleShowPopup = () => {
    setShowPopup(true);
    setShowSnapbook(true);
    setSnap(null);
  };

  const toggleHidePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <figure className={showSnapbook ? "hideView" : ""}>
        <img
          src="https://i.ibb.co/6nCZ7RV/Snapbook.png"
          alt="snapbook banner"
        />
      </figure>

      <div className={showSnapbook ? "hideView" : "addSnapArea"}>
        <h2>Add your first Snap to Snapbook</h2>
        <button className="addBtn" onClick={toggleShowPopup}>
          Start
        </button>
        <button className="snapbookBtn" onClick={() => setShowSnapbook(true)}>
          Watch Snapbook
        </button>
      </div>

      <ImageUploader
        snap={snap}
        setSnap={setSnap}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        toggleHidePopup={toggleHidePopup}
      />

      {showSnapbook ? (
        <AllImages
          snap={snap}
          setSnap={setSnap}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          toggleShowPopup={toggleShowPopup}
          toggleHidePopup={toggleHidePopup}
        >
          {selectedImg && <img src={selectedImg} alt={selectedImg.name} />}
        </AllImages>
      ) : (
        ""
      )}
    </div>
  );
};

export default Entry;
