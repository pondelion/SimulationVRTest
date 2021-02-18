import { ThreeObjects } from './ThreeScene';
import { Props as CASProps, CoordinateAxisScene} from './CoordinateAxisScene';
import { ObjectFactory as OF } from '../utils/three/ObjectFactory';


export interface Props extends CASProps {};


class TestBoxScene extends CoordinateAxisScene {

  constructor(props: Props) {
    super(props);

    this.update = this.update.bind(this);
    this.createObjects = this.createObjects.bind(this);

    this._objects = this.createObjects();

    this.onObjectsUpdated();
    this.forceUpdate();
  }

  update(cnt: number): void {
    super.update(cnt);

    const idx = this._objects.findIndex(obj => obj.tag === 'box1');
    this._objects[idx].obj.rotation.x += 0.01;
    this._objects[idx].obj.rotation.y += 0.01;

    if (this.isKeyPressed('ArrowUp')) {
      this._objects[idx].obj.position.y += 0.1;
    } 
    if (this.isKeyPressed('ArrowDown')) {
      this._objects[idx].obj.position.y -= 0.1;
    }
    if (this.isKeyPressed('ArrowRight')) {
      this._objects[idx].obj.position.x += 0.1;
    }
    if (this.isKeyPressed('ArrowLeft')) {
      this._objects[idx].obj.position.x -= 0.1;
    }

    if ((this._intersectedObj !== null) && (this._intersectedObj.type === 'Mesh')) {
      console.log(this._intersectedObj);
      let mat = (this._intersectedObj as THREE.Mesh).material;
      (mat as THREE.MeshLambertMaterial).color.set(Math.random() * 0xffffff);
      (this._intersectedObj as THREE.Mesh).scale.set(1.5, 1.5, 1.5);
    } else if ((this._lastIntersectedObj !== null) && (this._lastIntersectedObj.type === 'Mesh')) {
      (this._lastIntersectedObj as THREE.Mesh).scale.set(1, 1, 1);
    }

  }

  createObjects(): ThreeObjects {
    const objs = super.createObjects();

    objs.push({
      tag: 'box1',
      obj: OF.createTorusKnot(
        0.0, 0.0, 0.0,
        // 0.1, 1, 6.7, 10, 3, 40
      ),
      objType: 'box'
    }) 
    return objs;
  }
}

export default TestBoxScene;
