import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AutorAdmin from './Autor';
import LivroAdmin from './Livro';
import './index.css';

ReactDOM.render(
  (<Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/autor" component={AutorAdmin}/>
        <Route path="/livro" component={LivroAdmin}/>
      </Switch>
    </App>
  </Router>),
  document.getElementById('root')
);
