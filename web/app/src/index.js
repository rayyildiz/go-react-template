import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ENABLE_SW} from "./constants";

ReactDOM.render(<App/>, document.getElementById('root'));

if (ENABLE_SW) {
  serviceWorker.register();
} else {
  serviceWorker.unregister();

}
