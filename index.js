import { AppRegistry } from 'react-native';
import App from './App';
import codePush from "react-native-code-push";

APP = codePush(App);
AppRegistry.registerComponent('test', () => APP);
