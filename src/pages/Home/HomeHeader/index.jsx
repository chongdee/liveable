import React from "react";
import "./style.less";
import { Link } from "react-router-dom";

import SearchInput from "../../../components/SearchInput";
export default class HomeHeader extends React.Component {
  render() {
    return (
      <div>
        <div className="home-header clear-fix">
          {/* 左 */}
          <div className="home-header-left float-left">
            <Link to="/city">
              <span>{this.props.city}</span>
            </Link>
            <i className="icon-angle-down"></i>
          </div>

          {/* 右 */}
          <div className="home-header-right float-right">
            {/* 购物车页面做是否登录判断 */}
            <Link to='/cart'>
              <i className="iconfont icon-car"></i>
            </Link>
          </div>

          {/* 中 */}
          <div className="home-header-middle">
            <div className="search-container">
              <i className="icon-search"></i>
              <SearchInput history={this.props.history} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
