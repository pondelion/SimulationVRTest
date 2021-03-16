import axios from 'axios';
import Swal from 'sweetalert2'


const SERVER_HOST: string = '127.0.0.1';
const SERVER_PORT: number = 8000;
const LAMBDA_BASE_URL: string = 'https://qbhsm9w8if.execute-api.ap-northeast-1.amazonaws.com/api';
let api_base_url: string | null = null;

const serverCheck = async () => {
  const SERVER_HEALTHCHECK_URL: string = `http://${SERVER_HOST}:${SERVER_PORT}/healthcheck`;
  if (api_base_url !== null) {
    return api_base_url;
  }
  api_base_url = await axios.get(SERVER_HEALTHCHECK_URL, {timeout: 4000})
    .then((response: any) => {
      const url = `http://${SERVER_HOST}:${SERVER_PORT}/api`;
      return url;
    })
    .catch((error: any) => {
      console.log(error);
      Swal.fire(`https://${SERVER_HOST}:${SERVER_PORT} is not available. Using lambda backend instead. This could take long time.`);
      const url = LAMBDA_BASE_URL;
      return url
    })
  return api_base_url;
}
serverCheck();

export const APIBaseURL = () => {
  if (api_base_url === null) {
    Swal.fire('Still checking server availability. Try again.');
  }
  return api_base_url;
}

