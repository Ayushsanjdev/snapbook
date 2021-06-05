import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Snapbook  
        <img 
          src="https://img.icons8.com/dusk/50/000000/instagram-new.png" 
          alt="snapbook logo" width="30px" height="30px" /></h1>
        <button className="addSnap">Add Snap</button>
      </header>
      <h3
        className="about-para">Add and save <span className="snapbook-clr">your first Snapbook</span></h3>
    </div>
  );
}

export default App;
