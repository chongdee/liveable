import React from "react";
import './style.less'
import { Link } from "react-router-dom";
export default class HomeHeader extends React.Component {
  render() {
    return (
      <div>
        <div className="home-header clear-fix">
          {/* 左 */}
          <div className="home-header-left float-left">
            <Link to='/city'>
              <span>广州</span>
            </Link>
            <i className="icon-angle-down"></i>
          </div>

          {/* 右 */}
          <div className="home-header-right float-right">
            <i className="iconfont icon-car"></i>
          </div>

          {/* 中 */}
          <div className="home-header-middle">
            <div className="search-container">
              <i className="icon-search"></i>
              <input />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
