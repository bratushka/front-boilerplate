import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import generateStore from './data/store';


ReactDOM.render(<App store={generateStore()} />, document.getElementById('root'));
registerServiceWorker();
