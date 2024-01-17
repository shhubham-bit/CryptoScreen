/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import App2 from './Tetsing';

import HomeScreen from './currencyChart/HomeScreen';
import { AppRoute } from './route/Route';

AppRegistry.registerComponent(appName, () => AppRoute);
