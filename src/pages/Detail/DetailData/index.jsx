import React from "react";
import api from "../../../api";
import DetailView from "./DetailView";
import CollectBuy from "./CollectBuy";


export default class DetailData extends React.Component {
  constructor(props){
    super(props)
    this.state={
      data:{},
      comments:[]
    }
  }
  componentDidMount() {
    const { id } = this.props
    // 房屋信息数据请求
    api.detail
      .detailData(id)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data
        })
      });
    
      // 评价数据请求
    api.comment.commentData(id)
      .then(res=>res.json())
      .then(data=>{
        this.setState({
          comments:data.data
        })
        
      })
  }
  render() {
    return (
      <div>
        {/* 数据有延迟，所有需要判断是否有数据 */}
        {this.state.data.imgs && this.state.comments ? (
          <DetailView data={this.state.data} comments={this.state.comments} />
        ) : (
          <div>数据加载中</div>
        )}
        {/* 收藏购买组件 */}
        <CollectBuy history={this.props.history} id={this.props.id}/>    
      </div>
    );
  }
}
