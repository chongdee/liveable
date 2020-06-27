import React from 'react';
import ReactDOM from 'react-dom';

import './static/css/common.less'
import "./static/css/font.css";
import "./static/css/iconfont.css";

import "swiper/css/swiper.css";

import AppRouter from "./router/AppRouter";

ReactDOM.render(
  <AppRouter />,
  document.getElementById("root")
);

