import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import './css/font-awesome.css';
import './css/templatemo-training-studio.css';
import custom from './custom';
import Menu from './components/Menu';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import _404 from './Pages/404'
import Graph from './Pages/Graph'

function App() {

  custom();
  
  return (
    <div className="App">
    <Router>
      <Menu active={1}/>
      <Switch>
        <Route path={["/","/inicio"]} component={Home} exact />

        <Route path="/grafo" component={Graph} exatly />
        <Route component={_404} />
        <Route>
          <_404 />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
