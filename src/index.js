import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import user_controller from "./components/user_controller";

ReactDOM.render(

<BrowserRouter>
<Provider store ={store}>
<App />
</Provider>
</BrowserRouter>


, document.getElementById('root'));
registerServiceWorker();
