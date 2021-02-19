import axios from 'axios';
import niceColors from 'nice-color-palettes';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import SpriteText from 'three-spritetext';
import { Props as CASProps, CoordinateAxisScene} from './CoordinateAxisScene';
import { ObjectFactory as OF } from '../utils/three/ObjectFactory'
import { SERVER_IP, SERVER_PORT } from '../Config'

export interface Props extends CASProps {};


export class CompanyFinancialDistributionScene extends CoordinateAxisScene {

  protected _open: boolean = true;

  constructor(props: Props) {
    super(props);
    
    this._objects = super.createObjects();

    this._open = true;
    const url: string = `http://${SERVER_IP}:${SERVER_PORT}/financial_distdata/3`
    axios
      .get(url)
      .then((res) => {
        const data = res.data.data;
        const company_name = res.data.company_name;
        const cls = res.data.class;
        
        console.log('start creating objs')
        const colorPalletes = niceColors[0].concat(niceColors[2]).concat(niceColors[3]).concat(niceColors[4]);
        const objs = data.map((d: number[], idx: number) => {
          return {
            tag: `sphere${idx}`,
            obj: OF.createSphere(
              5*d[0], 5*d[1], 5*d[2],
              0.1,
              0.7,
              colorPalletes[cls[idx]]
            ),
            objType: 'sphere'
          }
        });
        this._objects = this._objects.concat(objs);

        const texts = company_name.slice(0, 100).map((name: string, idx: number) => {
          const st = new SpriteText(name);
          st.position.set(5*data[idx][0], 5*data[idx][1], 5*data[idx][2]);
          st.textHeight = 0.15;
          st.color = '#FF0000';
          return {
            tag: `text${idx}`,
            obj: st,
            objType: 'other'
          }
        });
        this._objects = this._objects.concat(texts);

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

export default CompanyFinancialDistributionScene;
