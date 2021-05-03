import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import reducer from './redux/reducer'
import { createStore } from 'redux'
import App from './App';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  ,
  document.getElementById('root')
);


