import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as MainMenu from './components/MainMenu';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <MainMenu.MainMenu onClick={(selection) => console.log(selection)} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
