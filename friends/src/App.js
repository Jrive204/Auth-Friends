import React from "react";
import PrivateRoute from "./util/PrivateRoute";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendsGrid from "./components/FriendsGrid";
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <PrivateRoute path='/Friends' component={FriendsGrid} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
