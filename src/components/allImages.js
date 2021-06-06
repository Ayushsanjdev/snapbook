import React from "react";

const AllImages = ({snap}) => {
  return(
    <div className="imageGrid">
      <img src={snap.image} alt={"uploaded images"} />
    </div>
  )
}

export default AllImages;

