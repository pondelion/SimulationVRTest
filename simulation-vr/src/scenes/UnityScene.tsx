import React from 'react';
import Unity, { UnityContext } from "react-unity-webgl";


const unityContext = new UnityContext({
  loaderUrl: "https://react-unity-test.s3-ap-northeast-1.amazonaws.com/Build/Build.loader.js",
  dataUrl: "https://react-unity-test.s3-ap-northeast-1.amazonaws.com/Build/Build.data",
  frameworkUrl: "https://react-unity-test.s3-ap-northeast-1.amazonaws.com/Build/Build.framework.js",
  codeUrl: "https://react-unity-test.s3-ap-northeast-1.amazonaws.com/Build/Build.wasm",
});

function UnityScene() {
  return (
    <div className="App">
      <div>
        <button onClick={() => {unityContext.send('Player', 'MoveLeft')}} >left</button>
        <button onClick={() => {unityContext.send('Player', 'MoveRight')}} >right</button>
      </div>
      <Unity unityContext={unityContext} style={{width: '80%', height: '600px'}}/>
    </div>
  );
}

export default UnityScene;
