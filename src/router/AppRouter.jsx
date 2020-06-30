import React from 'react';
import {Route,HashRouter,Switch} from 'react-router-dom';
import App from "../pages/app";

import Home from '../pages/Home'
import Life from "../pages/Life";
import Profile from "../pages/Profile";
import Shop from "../pages/Shop";
import NotFound from "../pages/NotFound";
import City from "../pages/City";
import Search from "../pages/Search";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Cart from "../pages/Cart";

/* 
  因为城市初始化需要数据，所以构建App 页面一加载初始化城市数据
*/
export default class AppRouter extends React.Component{
  render(){
    return (
      <HashRouter>
        <App path="/">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/life" component={Life}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/city" component={City}></Route>
            <Route path="/search/:content" component={Search}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </App>
      </HashRouter>
    );
  }
}