import { Props as ThreeProps, ThreeScene, ThreeObjects } from './ThreeScene';
import { ObjectFactory as OF } from '../utils/three/ObjectFactory';


// interface Props extends ThreeProps {
//   axis_length: number;
// }
export interface Props extends ThreeProps {};


export class CoordinateAxisScene extends ThreeScene {

  // protected _axis_length: number = 1.0;

  constructor(props: Props) {
    super(props as ThreeProps);
  
    this._objects = this.createObjects();

    this.update = this.update.bind(this);
    this.createObjects = this.createObjects.bind(this);

    this.forceUpdate();
  }

  update(cnt: number): void {
    super.update(cnt);
  }

  createObjects(): ThreeObjects {
    const objs: ThreeObjects = super.createObjects();

    objs.push({
      tag: 'x_axis',
      obj: OF.createArrow(
        'x_axis',
        0, 0, 0,
        1.0, 0.0, 0.0,
        0.5*Math.PI, 0.0, 0,
        6.0, //this._axis_length,
        0xFF0000,
        0.5, //this._axis_length/5,
        0.5, //this._axis_length/5,
      ),
      objType: 'arrow'
    })

    objs.push({
      tag: 'y_axis',
      obj: OF.createArrow(
        'y_axis',
        0, 0, 0,
        0.0, 1.0, 0.0,
        0, 0.5*Math.PI, 0,
        6.0,
        0x00FF00,
        0.6, 0.6,
      ),
      objType: 'arrow'
    })

    objs.push({
      tag: 'z_axis',
      obj: OF.createArrow(
        'z_axis',
        0, 0, 0,
        0.0, 0.0, 1.0,
        0, 0, 0.5*Math.PI,
        6.0,
        0x0000FF,
        0.6, 0.6,
      ),
      objType: 'arrow'
    }) 
    return objs;
  }
}

export default CoordinateAxisScene;
