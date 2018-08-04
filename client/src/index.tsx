import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as MainMenu from './components/MainMenu';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MainMenu.MainMenu onClick={(selection) => console.log(selection)} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
