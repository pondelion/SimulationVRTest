import * as THREE from 'three';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ThreeObjects } from './ThreeScene';
import { Props as CASProps, CoordinateAxisScene} from './CoordinateAxisScene';
import { ObjectFactory as OF } from '../utils/three/ObjectFactory';
import { APIClient } from '../api/APIClient';


export interface Props extends CASProps {};


class MDScene extends CoordinateAxisScene {

  constructor(props: Props) {
    super(props);
    this.startRecord = this.startRecord.bind(this);
    this.stopRecord = this.stopRecord.bind(this);
  }

  private startRecord(): void {
    this._takeImageSnapshot = true;
    console.log('saveImage')
    if (this._imageURL === null) {
      return;
    }
    APIClient.saveImage(
      this._imageURL,
      'capture',
      'test.jpg'
    )
  }

  private stopRecord(): void {
    this._takeImageSnapshot = false;
  }

  render() {
    return (
      <div>
        {super.render()}
        <Grid container spacing={1}>
          <Grid container item xs={10} spacing={1}>
            <Grid item xs={6}>
              <TextField id="outlined-basic" label="directory name to save image files" variant="outlined"/>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={this.startRecord}>Start Record</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={this.stopRecord}>Stop Record</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }

}

export default MDScene;
