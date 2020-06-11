/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'mobx-react-lite/batchingForReactDom';

import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
