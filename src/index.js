import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'));


const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
);
