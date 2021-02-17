import TestBoxScene from './scenes/TestBoxScene'
import './App.css';


function App() {
  return (
    <div className="App">      
      <TestBoxScene width={0.9*window.innerWidth} height={0.9*window.innerHeight} cameraPos={{x: 5, y: 5, z: 5}}/>
    </div>
  );
}

export default App;
