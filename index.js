import {AppRegistry} from 'react-native';
import App from './App';
import ReduxAxiosApp from './ReduxAxiosApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ReduxAxiosApp);

//for normal execution
// AppRegistry.registerComponent(appName, () => App);
