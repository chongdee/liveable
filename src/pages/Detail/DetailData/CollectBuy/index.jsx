import React from "react";
import CollectBuyView from "./CollectBuyView";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as collectActions from "../../../../actions/collect";

class CollectBuy extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isCollected:false
    }
  }
  componentDidMount(){
    // 页面渲染就获取状态，避免返回上一页，再回来状态丢失
    const isCollected = this.isCollect();
    this.setState({
      isCollected
    });
  }
  collectHandle = () => {
    const userName = this.props.userinfo.user_name;
    const goods_id = this.props.id;
    if (userName) {
      const isCollect = this.isCollect();
      if (isCollect) {
        // 取消收藏
        this.props.collectActions.cancelCollect({
          id:goods_id
        })
        this.setState({
          isCollected:false
        })
      } else {
        // 实现收藏
        this.props.collectActions.setCollect({
          id: goods_id,
        });
         this.setState({
           isCollected: true,
         });
      }
    } else {
      this.props.history.push("/login");
    }
  };

  // 判断是否已收藏
  isCollect() {
    const id = this.props.id;
    const collects = this.props.collect;
    return collects.some((item) => {
      return item.id === id;
    });
  }
  BuyHandle = () => {
    console.log("购买");
  };
  render() {
    return (
      <div>
        <CollectBuyView
          onCollectHandle={this.collectHandle}
          onBuyHandle={this.BuyHandle}
          collected={this.state.isCollected}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
    collect: state.collect,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    collectActions: bindActionCreators(collectActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectBuy);
