import React from "react";
import api from "../../../api";
import SearchListView from "./SearchListView";

import LoadMore from "../../../components/LoadMore";
import { connect } from "react-redux";


export default class SearchList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      searchData: [],
      hasMore: false
    }
  }
  componentDidMount() {
    // 获取搜索内容
    const content = this.props.content;
    this.http(content);
  }

  // 网络请求
  http(content){
    api.search
      .searchData(content)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          // 数组合并
          searchData: this.state.searchData.concat(data.data),
          hasMore:data.hasMore
        });
      });
  }

  loadMoreHandle=()=>{
    const content = this.props.content;
    this.http(content);
    
  }

  componentWillUnmount(){
    // 防止请求网络慢的时候出现bug，所以清除
    this.setState=(state, cb)=>{
      return
    }
  }
  render() {
    return (
      <div>
        {this.state.searchData ? (
          <SearchListView data={this.state.searchData} />
        ) : (
          <div>数据正在加载</div>
        )}

        {
          this.state.hasMore ?
          <LoadMore onLoadMore={this.loadMoreHandle} />:
          <div>我是有底线的</div>
        }
      </div>
    );
  }
}

