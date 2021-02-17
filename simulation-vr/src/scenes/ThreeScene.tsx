import React from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import Button from '@material-ui/core/Button';
import { VRButton } from '../components/VRButton';
import { OrbitControls } from '../components/OrbitControls';


type Vec3 = {
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
  cameraPos: Vec3,
  onObjectsChanged?: (objs: ThreeObjects) => {},
};


export class ThreeScene extends React.Component<Props> {

  protected _scene: THREE.Scene;
  protected _camera: THREE.PerspectiveCamera;
  protected _renderer: THREE.WebGLRenderer;
  protected _container: HTMLDivElement | null = null;
  protected _frameId: number | null = null;
  protected _objects: ThreeObjects = [];
  protected _cnt: number = 0;
  protected _orbit_controls: any;
  protected _isKeyDown: any = {};

  state = {
    camera_pos_x: 0
  };

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

    this._camera.lookAt(new THREE.Vector3(0, 0, 0));

    this._renderer = new THREE.WebGLRenderer({ antialias: true });
    this._renderer.setSize(width, height);
    this._renderer.setClearColor('#b4bad2');
    this._renderer.xr.enabled = true;

    this.onButtonClick = this.onButtonClick.bind(this);
    this.createObjects = this.createObjects.bind(this);
    this.update = this.update.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount(): void {
    this._objects.map(obj => this._scene.add(obj.obj));
    if (this._container) {
      this._container.appendChild(this._renderer.domElement);

      this._orbit_controls = new OrbitControls(this._camera, this._container);
      this._orbit_controls.target.set( 0, 0, 0 );
      this._orbit_controls.update();
    }
    this.start();
    ReactDOM.render(<div id='vr_button'/>, document.body.appendChild(VRButton.createButton( this._renderer )))
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
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

  componentWillUnmount(): void {
    this.stop()
    if (this._container) {
      this._container.removeChild(this._renderer.domElement);
    }
  }

  start(): void {
    this._renderer.setAnimationLoop( () => {
      this._cnt += 1;
      this.update(this._cnt);
      // this._orbit_controls.update();
      this._renderer.render(this._scene, this._camera);
    })
  }

  stop(): void {
  }

  update(cnt: number): void {
  }

  createObjects(): ThreeObjects {
    return [];
  }

  onObjectsUpdated(): void {
    this._scene.remove.apply(this._scene, this._scene.children);
    this._objects.map(obj => this._scene.add(obj.obj));

    const ambientLight = new THREE.AmbientLight(0x222222);
    this._scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(10, 10, 10);
    spotLight.castShadow = true;
    this._scene.add(spotLight);
  }

  onButtonClick(): void {
    this._camera.position.x += 1;
    this.setState({camera_pos_x: this.state.camera_pos_x + 1});
  }

  render() {
    return (
      <div>
        <div
          style={{ width: this.props.width, height: this.props.height }}
          ref={(container) => { this._container = container }}
        />
        <Button variant="contained" color="primary" onClick={this.onButtonClick}>
          {this._camera.position.x}
        </Button>
        <div id='vr_button'/>
      </div>
    )
  }
}

export default ThreeScene;
