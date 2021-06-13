import React, { useState } from 'react';
import './App.css';
import AllImages from './components/allImages';
import Entry from './components/AppLanding';

const App = () => {

  const [snap, setSnap] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  // 1.Initial state of the app will be applanding.js
  // 2.

  return (
    <div className="App">

      <Entry
        snap={snap}
        setSnap={setSnap} />

      <AllImages
        snap={snap}
        setSnap={setSnap}
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}>
          {selectedImg && (
            <img src={selectedImg} alt={selectedImg.name} />
          )}
      </AllImages>

      <footer>
        Made with 💖 by <a href="https//github.com/ayushsanjdev" style={{color: 'black'}}>ayushsanjdev</a>
      </footer>

    </div>
  );
}

export default App;
