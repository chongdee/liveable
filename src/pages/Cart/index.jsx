import React from "react";
import { connect } from "react-redux";
import OrderView from "./OrderView";
import UserView from "./UserView";
import CartHeader from "../../components/Header";
import api from "../../api";

class Cart extends React.Component {
  constructor(props){
    super(props)
    this.state={
      order:[]
    }
  }
  componentWillMount() {
    // 判断是否登录
    const userinfo = this.props.userinfo.user_name;
    if (userinfo) {
      // 网络请求
      api.order
        .orderData(userinfo)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            order:data
          })
        });
    } else {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div>
        <CartHeader title="购物车" />
        <UserView user={this.props.userinfo.user_name} city={this.props.city} />
        {
          this.state.order.length>0?
          <OrderView data={this.state.order}/>:
          <div>数据加载中</div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
    city: state.city.cityName,
  };
}

export default connect(mapStateToProps)(Cart);
