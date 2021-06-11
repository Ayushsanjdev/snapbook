import React, { useState } from 'react';
import './App.css';
import Entry from './components/AppLanding';
// import AllImages from './components/allImages';

const App = () => {

  const [snap, setSnap] = useState(null);
  // const [inProgress, setInProgress] = useState(0);

  return (
    <div className="App">
      <Entry
        snap={snap}
        setSnap={setSnap} />
    
      {/* {if I upload the photo then only show all the pictures} */}
      {/* <AllImages
        snap={snap} /> */}

      <footer>
        Made with 💖 by <a href="https://github.com/ayushsanjdev" style={{color: 'black'}}>ayushsanjdev</a>
      </footer>

    </div>
  );
}

export default App;
