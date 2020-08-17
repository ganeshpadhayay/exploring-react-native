import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import ReduxApp from './ReduxApp';
import {name as appName} from './app.json';

//for redux setup configuration
import {Provider} from 'react-redux';

import configureStore from './src/redux/reduxStore';
const store = configureStore();

const ReduxTutorial = () => (
  <Provider store={store}>
    <ReduxApp />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxTutorial);

//for normal execution
// AppRegistry.registerComponent(appName, () => App);
