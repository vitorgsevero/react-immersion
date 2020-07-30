import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './components/Pages/Cadastro/Video/index';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route component={App} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
