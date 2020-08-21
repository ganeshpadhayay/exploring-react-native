import {NetworkApiClient} from '../networking/NetworkClient';

function hitAPI(url, timeOut, callback) {
  const apiClient = new NetworkApiClient(url);
  let promise = apiClient.getWithTimeoutConfigration(url, timeOut);
  promise.then(
    (result) => {
      callback(result);
    },
    (error) => {
      callback(error);
    },
  );
}

export default hitAPI;
