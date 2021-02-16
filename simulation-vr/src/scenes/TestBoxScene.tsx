import { Props as ThreeProps, ThreeObjects } from './ThreeScene';
import CoordinateAxisScene from './CoordinateAxisScene';
import { ObjectFactory as OF } from '../utils/three/ObjectFactory';


type Props = ThreeProps;

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
    const idx = this._objects.findIndex(obj => obj.tag === 'box1');
    this._objects[idx].obj.rotation.x += 0.01;
    this._objects[idx].obj.rotation.y += 0.01;
    super.update(cnt);
  }

  createObjects(): ThreeObjects {
    const objs = super.createObjects();

    objs.push({
      tag: 'box1',
      obj: OF.createBox(0.0, 0.0, 0.0),
      objType: 'box'
    }) 
    return objs;
  }
}

export default TestBoxScene;
