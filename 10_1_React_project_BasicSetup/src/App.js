import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Login from './Pages/Login/login';
import Login from './Pages/Login/Login';
import Movies from './Pages/Movies/Movies';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/movies" component={Movies} />
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
