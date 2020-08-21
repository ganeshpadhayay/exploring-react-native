import React from 'react';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import reducers from './src/redux-axios/reducers/Reducers';
import SampleComponent from './src/redux-axios/components/SampleComponent';

const ReduxAxiosApp = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <SampleComponent />
    </Provider>
  );
};

export default ReduxAxiosApp;
