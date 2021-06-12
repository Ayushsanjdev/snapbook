import React, { useState } from 'react';
import './App.css';
import Entry from './components/AppLanding';

const App = () => {

  const [snap, setSnap] = useState(null);

  return (
    <div className="App">

      <Entry
        snap={snap}
        setSnap={setSnap} />

      <footer>
        Made with 💖 by <a href="%SRC_URL%/snapbook.png" style={{color: 'black'}}>ayushsanjdev</a>
      </footer>

    </div>
  );
}

export default App;
