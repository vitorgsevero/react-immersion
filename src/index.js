import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Pages/Home';
import PageNotFound from './components/Pages/PaginaNaoEncontrada/index';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './components/Pages/Cadastro/Video/index';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
