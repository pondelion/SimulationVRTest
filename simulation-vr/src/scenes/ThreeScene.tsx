import React from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import { VRButton } from '../components/VRButton';
import { OrbitControls } from '../components/OrbitControls';


type PosVec2 = {
  x: number,
  y: number,
};

type PosVec3 = {
  x: number,
  y: number,
  z: number,
};

export type ThreeObject = {
  tag?: string,
  obj: THREE.Mesh | THREE.ArrowHelper | THREE.Sprite,
  objType: 'box' | 'sphere' | 'plane' | 'sprite' | 'arrow' | 'other',
}

export type ThreeObjects = ThreeObject[];

export interface Props {
  width: number,
  height: number,
  cameraPos: PosVec3,
  onObjectsChanged?: (objs: ThreeObjects) => {},
  lookAt?: PosVec3,
  bgColor?: THREE.Color
};

// export interface States {open: boolean};

export class ThreeScene extends React.Component<Props> {

  protected _scene: THREE.Scene;
  protected _camera: THREE.PerspectiveCamera;
  protected _renderer: THREE.WebGLRenderer;
  protected _container: HTMLDivElement | null = null;
  protected _objects: ThreeObjects = [];
  protected _cnt: number = 0;
  protected _orbitControls: OrbitControls | null = null;
  protected _isKeyDown: {[key: string]: boolean} = {};
  protected _lookAt: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
  protected _bgColor: THREE.Color = new THREE.Color('#b4bad2');
  protected _raycaster = new THREE.Raycaster();
  protected _mousePos: PosVec2 = {x: 0, y: 0};
  protected _intersectedObj: THREE.Object3D | null = null;
  protected _lastIntersectedObj: THREE.Object3D | null = null;
  protected _clock: THREE.Clock = new THREE.Clock();

  constructor(props: Props) {
    super(props);

    this._scene = new THREE.Scene();

    const width = this.props.width;
    const height = this.props.height;
    this._camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      1000
    );

    this._camera.position.x = this.props.cameraPos.x;
    this._camera.position.y = this.props.cameraPos.y;
    this._camera.position.z = this.props.cameraPos.z;

    this._lookAt = props.lookAt === undefined ? 
        new THREE.Vector3(0, 0, 0) : 
        new THREE.Vector3(props.lookAt.x, props.lookAt.y, props.lookAt.z)
    this._camera.lookAt(new THREE.Vector3(this._lookAt.x, this._lookAt.y, this._lookAt.z));

    this._renderer = new THREE.WebGLRenderer({ antialias: true });
    this._renderer.setSize(width, height);

    if (props.bgColor !== undefined) {
      this._bgColor = props.bgColor;
    }
    this._renderer.setClearColor(this._bgColor);
    this._renderer.shadowMap.enabled = true;
    this._renderer.xr.enabled = true;

    this._raycaster = new THREE.Raycaster();

    this._intersectedObj = null;
    this._lastIntersectedObj = null;

    this._clock = new THREE.Clock();
    this._clock.getElapsedTime();

    this.createObjects = this.createObjects.bind(this);
    this.update = this.update.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount(): void {
    this._objects.map(obj => this._scene.add(obj.obj));
    if (this._container) {
      this._container.appendChild(this._renderer.domElement);

      this._orbitControls = new OrbitControls(this._camera, this._container);
      this._orbitControls.target.set( 0, 0, 0 );
      this._orbitControls.update();
    }
    this.start();
    ReactDOM.render(<div id='vr_button'/>, document.body.appendChild(VRButton.createButton( this._renderer )));
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  handleKeyDown(event: KeyboardEvent): void {
    this._isKeyDown[`key_${event.key}`] = true
  }

  handleKeyUp(event: KeyboardEvent): void {
    this._isKeyDown[`key_${event.key}`] = false
  }

  isKeyPressed(key: string): boolean {
    return this._isKeyDown[`key_${key}`]
  }

  handleMouseMove(event: MouseEvent): void {
    this._mousePos.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    this._mousePos.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  }

  componentWillUnmount(): void {
    this.stop()
    if (this._container) {
      this._container.removeChild(this._renderer.domElement);
    }
  }

  start(): void {
    this._renderer.setAnimationLoop( () => {
      this._cnt += 1;
      this.update(this._clock.getDelta());
      this._renderer.render(this._scene, this._camera);
    })
  }

  stop(): void {
  }

  update(delta: number): void {
    this._raycaster.setFromCamera(
      new THREE.Vector2(this._mousePos.x, this._mousePos.y),
      this._camera
    );
    const intersects = this._raycaster.intersectObject(this._scene, true);
    // for (let i=0; i<intersects.length; ++i) {
    if (intersects.length > 0) {
        const object = intersects[0].object;
        this._intersectedObj = object;
    } else if (this._intersectedObj != null) {
      this._lastIntersectedObj = this._intersectedObj;
      this._intersectedObj = null;
    }
  }

  createObjects(): ThreeObjects {
    return [];
  }

  onObjectsUpdated(): void {
    this._scene.remove.apply(this._scene, this._scene.children);
    this._objects.map(obj => this._scene.add(obj.obj));

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this._scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 2.0, 100, Math.PI / 4, 1);
    spotLight.position.set(2, 7, 2);
    spotLight.castShadow = true;
    this._scene.add(spotLight);

    // const sunLight = new THREE.DirectionalLight('rgb(255,255,255)', 1);
    // spotLight.castShadow = true;
    // this._scene.add(sunLight);

    this.forceUpdate();
  }

  addObject(obj: ThreeObject): void {
    this._objects.push(obj);
    this.onObjectsUpdated();
  }

  getCamPos(): THREE.Vector3 {
    return this._camera.position;
  }

  setCamPos(x: number, y: number, z: number): void {
    this._camera.position.set(x, y, z);
  }

  render() {
    return (
      <div>
        <div
          style={{ width: this.props.width, height: this.props.height }}
          ref={(container) => { this._container = container }}
        />
        <div id='vr_button'/>
      </div>
    )
  }
}

export default ThreeScene;
