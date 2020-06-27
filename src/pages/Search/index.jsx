import React from "react";
import api from '../../api'
import {connect} from 'react-redux'

import SearchHeader from "./SearchHeader";
import SearchList from "./SearchList";


class Search extends React.Component {
  render() {
    const content = this.props.match.params.content;
    return (
      <div>
        <SearchHeader history={this.props.history} />
        {/* 获取动态路由值 */}
        {/* {this.props.match.params.content} */}
        <SearchList content={content} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.city,
  };
}



export default connect(mapStateToProps)(Search);
