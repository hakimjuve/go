import logo from './img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Fooorza Juve</h1>
          <br />
              </div>
              <img src={logo} alt="logo" />
          <br />
          <img src="/juve.webp"  />
          <br />
         
          <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;




