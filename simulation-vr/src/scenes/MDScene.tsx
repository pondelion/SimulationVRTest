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
    this.saveImage = this.saveImage.bind(this);
  }

  private saveImage() {
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
              <Button variant="contained" color="primary" onClick={this.saveImage}>Start Record</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary">Stop Record</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }

}

export default MDScene;
