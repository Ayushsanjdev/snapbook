import React, { useState } from 'react';
import './App.css';
import ImageUploader from './components/imageUploader'
import AllImages from './components/allImages';

const App = () => {

  const [snap, setSnap] = useState(null);
  const [inProgress, setInProgress] = useState(0);

  return (
    <div className="App">
      <header>
      <img 
          src="https://img.icons8.com/dusk/50/000000/instagram-new.png" 
          alt="snapbook logo"/>
        <h1>Snapbook</h1>
      <button className="githubBtn">
        <img 
          src="https://img.icons8.com/nolan/64/github.png" 
          alt="go to github"
          width="50px" />
        </button>
      </header>
      <button className="addBtn">Add Snap</button>
      <ImageUploader
        snap={snap}
        setSnap={setSnap}
        inProgress={inProgress}n
        setInProgress={setInProgress} />
        
      <AllImages
        snap={snap} />
    </div>
  );
}

export default App;
