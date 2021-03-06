import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';;
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './store/index';



ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
