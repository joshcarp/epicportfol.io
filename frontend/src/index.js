import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import AuthProvider from './provider/AuthProvider';
import {BrowserRouter} from 'react-router-dom';


const store = createStore(reducers);


ReactDOM.render(
    // <BrowserRouter>
    //     <AuthProvider>
    //         <App />
    //     </AuthProvider>
    // </BrowserRouter>
    // , document.getElementById('root')

    <Provider store={store}>
        <AuthProvider>
            <App />
        </AuthProvider>

    </Provider>,
    document.querySelector('#root')

    // <Provider store={store}>
    //     <App />
    // </Provider>,
    // document.querySelector('#root')

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
