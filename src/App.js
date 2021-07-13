import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './comps/signup/SignUp';
import Home from './comps/Home'; 
import login from './comps/login/login';
import { AuthProvider } from './contexts/AuthContexts';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Switch>
        <Route exact path="/" component={SignUp} ></Route>
        <Route path="/login" component={login}></Route>
        <Route path="/home" component={Home}></Route>
      </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
