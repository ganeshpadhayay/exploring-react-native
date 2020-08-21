import {API_ERROR, API_LOADING, API_SUCCESS} from '../actions/ActionTypes';

const INITIAL_STATE = {
  data: '',
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_LOADING:
      return {...state, loading: true};
    case API_SUCCESS:
      return {...state, loading: false, data: action.payload};
    case API_ERROR:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};
