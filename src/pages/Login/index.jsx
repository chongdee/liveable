import React from 'react'
import LoginView from './LoginView'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActions from '../../actions/userinfo'

class Login extends React.Component {
  loginHandle=(user)=>{
    // 获取token,页面登录，后台获取用户
    // 用户信息存储，redux和本地
    // console.log(user);
    // 获取用户信息存储到redux
    this.props.userInfoActions.loginUser({
      user_name:user
    })
    
    window.history.back()
  }
  render () {
    return (
      <div>
        <LoginView onLogin ={this.loginHandle}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userinfo:state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);