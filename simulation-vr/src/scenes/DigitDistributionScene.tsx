import axios from 'axios';
import niceColors from 'nice-color-palettes';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Props as CASProps, CoordinateAxisScene} from './CoordinateAxisScene';
import { ObjectFactory as OF } from '../utils/three/ObjectFactory'
import { SERVER_IP, SERVER_PORT } from '../Config'

export interface Props extends CASProps {};


export class DigitDistributionScene extends CoordinateAxisScene {

  protected _open: boolean = true;

  constructor(props: Props) {
    super(props);
    
    this._objects = super.createObjects();

    this._open = true;
    const url: string = `http://${SERVER_IP}:${SERVER_PORT}/digit_distdata/3`
    axios
      .get(url)
      .then((res) => {
        const data = res.data.data;
        const label = res.data.label;
        
        console.log('start creating objs')
        const colorPalletes = niceColors[0].concat(niceColors[2])
        const objs = data.map((d: number[], idx: number) => {
          return {
            tag: `sphere${idx}`,
            obj: OF.createSphere(
              4*d[0], 4*d[1], 4*d[2],
              0.1,
              0.7,
              colorPalletes[label[idx]]
            ),
            objType: 'sphere'
          }
        });
        this._objects = this._objects.concat(objs);
        this.onObjectsUpdated();
        console.log('done creating objs');
        this._open = false;
        this.forceUpdate();
      }).catch((err) => {
        console.log(err);
        this._open = false;
        this.forceUpdate();
        alert(`Could not fetch data from backend server ${url}`)
      });
  }

  render() {
    return (
      <div>
        {super.render()}
        <Dialog
          open={this._open}
          onClose={() => {this._open = false;}}
        >
          <DialogTitle id="simple-dialog-title">Loading Data....</DialogTitle>
        </Dialog>
      </div>
    )
  }
}

export default DigitDistributionScene;
