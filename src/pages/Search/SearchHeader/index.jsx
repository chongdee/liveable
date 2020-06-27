import React from "react";
import SearchInput from "../../../components/SearchInput";
import "./style.less";

export default class SearchHeader extends React.Component {
  clickBackHandle=()=>{
    window.history.back()
  }
  render() {
    return (
      <div id="search-header" className="clear-fix">
        <span
          className="back-icon float-left"
          onClick={this.clickBackHandle}
        >
          <i className="icon-chevron-left"></i>
        </span>
        <div className="input-container">
          <i className="icon-search"></i>
          <SearchInput history={this.props.history} />
        </div>
      </div>
    );
  }
}
