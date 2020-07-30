import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Pages/Home';
import PageNotFound from './components/Pages/PaginaNaoEncontrada';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './components/Pages/Cadastro/Video';
import CadastroCategoria from './components/Pages/Cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
