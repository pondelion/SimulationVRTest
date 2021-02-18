import React from 'react';
import Button from '@material-ui/core/Button';
import TestScene from './scenes/TestScene';
// import DigitDistributionScene from './scenes/DigitDistributionScene';
import BubbleMenu from './containers/Menu';
import './App.css';


// const sceneRef = React.createRef<TestScene>();
const textRef = React.createRef<SVGTextElement>();
const buttonRef = React.createRef<HTMLButtonElement>();


const onButtonClick = (): void => {
  // const camPos: THREE.Vector3 = sceneRef.current!.getCamPos();
  // sceneRef.current!.setCamPos(
  //   camPos.x + 0.1, camPos.y + 0.1, camPos.z + 0.1
  // );
  // textRef.current!.textContent = camPos.x.toFixed(3);
  // buttonRef.current!.textContent = camPos.x.toFixed(3);
}


function App() {
  return (
    <div className="App">      
      {/* <DigitDistributionScene
        width={0.9*window.innerWidth}
        height={0.9*window.innerHeight}
        cameraPos={{x: 5, y: 5, z: 5}}
        ref={sceneRef}
      /> */}
      <BubbleMenu />
      <div id='scene'>
        <TestScene
          width={0.9*window.innerWidth}
          height={0.9*window.innerHeight}
          cameraPos={{x: 5, y: 5, z: 5}}
        />
      </div>
      <Button variant="contained" color="primary" onClick={onButtonClick} ref={buttonRef}>
          Move Camera
      </Button>
      <text ref={textRef}></text>
    </div>
  );
}

export default App;
