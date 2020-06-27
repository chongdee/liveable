import React from 'react';
import {Route,HashRouter,Switch} from 'react-router-dom';

import Home from '../pages/Home'
import Life from "../pages/Life";
import Profile from "../pages/Profile";
import Shop from "../pages/Shop";
import NotFound from "../pages/NotFound";
import City from "../pages/City";

export default class AppRouter extends React.Component{
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/life" component={Life}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/city" component={City}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </HashRouter>
    );
  }
}