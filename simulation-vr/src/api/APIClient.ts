import axios from 'axios';
import { APIBaseURL } from '../Config'


export class APIClient {

  static saveImage(
    imageURL: string,
    directory: string,
    filename: string,
  ): void {
    const api_base_url: string | null = APIBaseURL();
    if (api_base_url === null || api_base_url?.includes('amazonaws')) {
      console.log('saveImage failed');
      return;
    }
    const url: string = `${api_base_url}/save_image`;
    const filepath: string = `${directory}/${filename}`;
    axios.post(
      url,
      null,
      { 
        params: {
          image_url: imageURL,
          filepath: filepath
        }
      },
    );
  }

}