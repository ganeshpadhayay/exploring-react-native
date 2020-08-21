import axios from 'axios';

const getClient = (baseUrl = null, headers = null, timeout = null) => {
  const options = {
    baseURL: baseUrl,
    headers: headers,
    timeout: timeout,
  };

  const axiosClient = axios.create(options);
  return axiosClient;
};

class NetworkApiClient {
  constructor(baseUrl, headers, timeout = 60000) {
    if (baseUrl == undefined) {
      console.log('Error while creating api client: baseUrl missing');
    } else {
      this.client = getClient(baseUrl, headers, timeout);
    }
  }

  getEncryptedParams(params) {
    return params;
  }

  decryptResponse(response) {
    return response;
  }

  request(endpoint, config = {}) {
    let configWithUrl = {...config, ...{url: endpoint}};
    return this.client
      .request(configWithUrl)
      .then((response) => {
        console.log(response.data);
        return Promise.resolve(response);
      })
      .catch((responseError) => {
        console.log(responseError);
        return Promise.reject(responseError);
      });
  }

  //MARK: GET
  get(endpoint, config = {}) {
    return this.request(endpoint, {...config, ...{method: 'get'}});
  }

  getWithConfigration(endpoint, headers, queryParams, timeout) {
    return this.get(endpoint, {
      headers: headers,
      params: queryParams,
      timeout: timeout,
    });
  }

  getWithHeadersConfigration(endpoint, headers, timeout) {
    return this.get(endpoint, {headers: headers, timeout: timeout});
  }

  getWithQueryParamsConfigration(endpoint, queryParams, timeout) {
    return this.get(endpoint, {params: queryParams, timeout: timeout});
  }

  getWithTimeoutConfigration(endpoint, timeout) {
    return this.get(endpoint, {timeout: timeout});
  }

  //MARK: DELETE
  delete(endpoint, config = {}) {
    return this.request(endpoint, {...config, ...{method: 'delete'}});
  }

  deleteWithConfigration(endpoint, headers, queryParams, timeout) {
    return this.delete(endpoint, {
      headers: headers,
      params: queryParams,
      timeout: timeout,
    });
  }

  deleteWithHeadersConfigration(endpoint, headers, timeout) {
    return this.delete(endpoint, {headers: headers, timeout: timeout});
  }

  deleteWithQueryParamsConfigration(endpoint, queryParams, timeout) {
    return this.delete(endpoint, {params: queryParams, timeout: timeout});
  }

  deleteWithTimeoutConfigration(endpoint, timeout) {
    return this.delete(endpoint, {timeout: timeout});
  }

  //MARK: HEAD
  head(endpoint, config = {}) {
    return this.request(endpoint, {...config, ...{method: 'head'}});
  }

  headWithConfigration(endpoint, headers, queryParams, timeout) {
    return this.head(endpoint, {
      headers: headers,
      params: queryParams,
      timeout: timeout,
    });
  }

  headWithHeadersConfigration(endpoint, headers, timeout) {
    return this.head(endpoint, {headers: headers, timeout: timeout});
  }

  headWithQueryParamsConfigration(endpoint, queryParams, timeout) {
    return this.head(endpoint, {params: queryParams, timeout: timeout});
  }

  headWithTimeoutConfigration(endpoint, timeout) {
    return this.head(endpoint, {timeout: timeout});
  }

  //MARK: OPTIONS
  options(endpoint, config = {}) {
    return this.request(endpoint, {...config, ...{method: 'options'}});
  }

  optionsWithConfigration(endpoint, headers, queryParams, timeout) {
    return this.options(endpoint, {
      headers: headers,
      params: queryParams,
      timeout: timeout,
    });
  }

  optionsWithHeadersConfigration(endpoint, headers, timeout) {
    return this.options(endpoint, {headers: headers, timeout: timeout});
  }

  optionsWithQueryParamsConfigration(endpoint, queryParams, timeout) {
    return this.options(endpoint, {params: queryParams, timeout: timeout});
  }

  optionsWithTimeoutConfigration(endpoint, timeout) {
    return this.options(endpoint, {timeout: timeout});
  }

  //MARK: POST
  post(endpoint, params = {}, config = {}) {
    return this.request(endpoint, {
      ...config,
      ...{method: 'post', data: params},
    });
  }

  postWithConfigration(endpoint, params, headers, queryParams, timeout) {
    return this.post(endpoint, params, {
      headers: headers,
      timeout: timeout,
      params: queryParams,
    });
  }

  postWithHeadersConfigration(endpoint, params, headers, timeout, queryParams) {
    return this.post(endpoint, params, headers, timeout, queryParams);
  }

  postWithTimeoutConfigration(endpoint, params, timeout, queryParams) {
    return this.post(endpoint, params, {timeout: timeout, params: queryParams});
  }

  postWithQueryParamsConfigration(endpoint, params, queryParams, timeout) {
    return this.post(endpoint, params, {params: queryParams, timeout: timeout});
  }

  //MARK: PUT
  put(endpoint, params = {}, config = {}) {
    return this.request(endpoint, {
      ...config,
      ...{method: 'put', data: params},
    });
  }

  putWithConfigration(endpoint, params, headers, queryParams, timeout) {
    return this.put(endpoint, params, {
      headers: headers,
      timeout: timeout,
      params: queryParams,
    });
  }

  putWithHeadersConfigration(endpoint, params, headers, timeout, queryParams) {
    return this.put(endpoint, params, headers, timeout, queryParams);
  }

  putWithTimeoutConfigration(endpoint, params, timeout, queryParams) {
    return this.put(endpoint, params, {timeout: timeout, params: queryParams});
  }

  putWithQueryParamsConfigration(endpoint, params, queryParams, timeout) {
    return this.put(endpoint, params, {params: queryParams, timeout: timeout});
  }

  //MARK: PATCH
  patch(endpoint, params = {}, config = {}) {
    return this.request(endpoint, {
      ...config,
      ...{method: 'patch', data: params},
    });
  }

  patchWithConfigration(endpoint, params, headers, queryParams, timeout) {
    return this.patch(endpoint, params, {
      headers: headers,
      timeout: timeout,
      params: queryParams,
    });
  }

  patchWithHeadersConfigration(
    endpoint,
    params,
    headers,
    timeout,
    queryParams,
  ) {
    return this.patch(endpoint, params, headers, timeout, queryParams);
  }

  patchWithTimeoutConfigration(endpoint, params, timeout, queryParams) {
    return this.patch(endpoint, params, {
      timeout: timeout,
      params: queryParams,
    });
  }

  patchWithQueryParamsConfigration(endpoint, params, queryParams, timeout) {
    return this.patch(endpoint, params, {
      params: queryParams,
      timeout: timeout,
    });
  }

  //MARK: Upload using post
  uploadWithConfigration(
    endpoint,
    params,
    headers,
    queryParams,
    timeout,
    method = 'post',
    config = {},
    callback,
  ) {
    return this.request(endpoint, {
      ...config,
      ...{
        method: method,
        data: params,
        params: queryParams,
        headers: headers,
        timeout: timeout,
      },
    });
  }
}

export {NetworkApiClient};
