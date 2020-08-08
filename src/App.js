import React from 'react';

import './App.css';
import './css/bootstrap.min.css';
import './css/font-awesome.css';
import './css/templatemo-training-studio.css';

import custom from './custom';
import Menu from './components/Menu';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFoundPage from './Pages/404';
import Tools from './Pages/Tools';

function App() {

  custom();
  
  return (
    <div className="App">
    <Router>
      <Menu active={1}/>
      <Switch>
        <Route path={["/","/inicio"]} component={Home} exact />
        <Route path="/tools" component={Tools} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
