import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router >,
  document.getElementById('root')
);
