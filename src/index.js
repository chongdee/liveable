import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router/AppRouter";
import {Provider} from 'react-redux'
import configStore from "./store";

import './static/css/common.less'
import "./static/css/font.css";
import "./static/css/iconfont.css";

import "swiper/css/swiper.css";


const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,

  document.getElementById("root")
);

