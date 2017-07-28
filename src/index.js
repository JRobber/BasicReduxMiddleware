import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './store'
//import Provider from react-redux
//import store
    //Setup our provider
        //Render App


ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
