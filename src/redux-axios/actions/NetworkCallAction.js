import {API_ERROR, API_LOADING, API_SUCCESS} from './ActionTypes';
import hitAPI from '../NetworkService';

export const makeNetworkCall = ({url, timeOut}) => {
  return (dispatch) => {
    apiLoading(dispatch);
    hitAPI(url, timeOut, (result, error) => {
      if (result) {
        apiSuccess(dispatch, result.data);
      }
      if (error) {
        apiError(dispatch, error);
      }
    });
  };
};

//show loader
const apiLoading = (dispatch) => {
  dispatch({
    type: API_LOADING,
  });
};

//show error
const apiError = (dispatch, error) => {
  dispatch({
    type: API_ERROR,
    payload: error,
  });
};

//show data
const apiSuccess = (dispatch, data) => {
  dispatch({
    type: API_SUCCESS,
    payload: data,
  });
};
