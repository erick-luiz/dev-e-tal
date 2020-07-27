import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import './css/font-awesome.css';
import './css/templatemo-training-studio.css';
import custom from './custom';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import _404 from './Pages/404'

function App() {
  
  custom();
  
  return (
    <div className="App">
    <Router>
      <Header active={1}/>
      <Switch>
        <Route path={["/inicio","/", "/home"]} component={Home} />
        <Route>
          <_404 />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
