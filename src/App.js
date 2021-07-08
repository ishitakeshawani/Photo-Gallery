import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './comps/signup/SignUp';
import Home from './comps/Home'; 


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={SignUp} ></Route>
        <Route path="/home" component={Home}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
