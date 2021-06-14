import React, { useState } from 'react';
import './App.css';
import Entry from './components/AppLanding';

const App = () => {

  const [snap, setSnap] = useState(null);
  const [state, setState] = useState();

  //initial state of app should be Entry comp with redirecting state using button


  return (
    <div className="App">

      <Entry
        snap={snap}
        setSnap={setSnap} />

      <footer>
        Made with 💖 by <a href="https//github.com/ayushsanjdev" style={{color: 'black'}}>ayushsanjdev</a>
      </footer>

    </div>
  );
}

export default App;
