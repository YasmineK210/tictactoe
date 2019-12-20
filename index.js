/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Splash from './screen/splash'
import {name as appName} from './app.json';
import ChoosePlayer from './screen/chooseplayer'

AppRegistry.registerComponent(appName, () => Splash);
