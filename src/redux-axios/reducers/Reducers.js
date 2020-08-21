import {combineReducers} from 'redux';

//list all the reducers here
import NetworkCallReducer from './NetworkCallReducer';

export default combineReducers({
  networkCall: NetworkCallReducer,
});
