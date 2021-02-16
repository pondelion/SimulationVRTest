import TestBoxScene from './scenes/TestBoxScene'
import './App.css';


function App() {
  return (
    <div className="App">      
      <TestBoxScene width={2000} height={800} cameraPos={{x: 5, y: 5, z: 5}}/>
    </div>
  );
}

export default App;
