import React from "react";
import PrivateRoute from "./util/PrivateRoute";
import { Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendsGrid from "./components/FriendsGrid";

function App() {
  return (
    <div className='App'>
      
      <Link to='/login'>Login</Link>
      <Link to='/Friends'>Friends page</Link>

      <h1>Friends List</h1>

      <Switch>
        <PrivateRoute path='/Friends' component={FriendsGrid} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
