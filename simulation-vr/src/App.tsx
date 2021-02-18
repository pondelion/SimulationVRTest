import TestScene from './scenes/TestScene';
import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';


const sceneRef = React.createRef<TestScene>();
const textRef = React.createRef<SVGTextElement>();
const buttonRef = React.createRef<HTMLButtonElement>();


const onButtonClick = (): void => {
  const camPos: THREE.Vector3 = sceneRef.current!.getCamPos();
  sceneRef.current!.setCamPos(
    camPos.x + 0.1, camPos.y + 0.1, camPos.z + 0.1
  );
  textRef.current!.textContent = camPos.x.toFixed(3);
  buttonRef.current!.textContent = camPos.x.toFixed(3);
}


function App() {
  return (
    <div className="App">      
      <TestScene
        width={0.9*window.innerWidth}
        height={0.9*window.innerHeight}
        cameraPos={{x: 5, y: 5, z: 5}}
        ref={sceneRef}
      />
      <Button variant="contained" color="primary" onClick={onButtonClick} ref={buttonRef}>
          {sceneRef.current === null ? "-" : sceneRef.current!.getCamPos().x }
      </Button>
      <text ref={textRef}></text>
    </div>
  );
}

export default App;
