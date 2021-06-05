import './App.css';
import ImageUploader from './components/imageUploader'

function App() {
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
      <ImageUploader />
      <footer>
        <h3>After Uploading, You will be redirected to Snapbook</h3>
      </footer>
    </div>
  );
}

export default App;
