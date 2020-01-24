import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import {ENABLE_SW} from "./Constants";
import 'whatwg-fetch';
import 'es6-promise/auto';

ReactDOM.render(<App/>, document.getElementById('root'));

if (ENABLE_SW) {
  serviceWorker.register();
} else {
  serviceWorker.unregister();
}
