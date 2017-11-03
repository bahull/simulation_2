import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import user_controller from "./components/user_controller";

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<Provider store ={store}>
<App />
</Provider>
</BrowserRouter>
</Provider>

, document.getElementById('root'));
registerServiceWorker();
