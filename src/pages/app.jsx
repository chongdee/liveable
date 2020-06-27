import React from 'react';
import { connect } from "react-redux";
import * as cityActions from '../actions/city'
import {bindActionCreators} from 'redux'

class App extends React.Component {
 /* 
  初始化需求
    1. 城市初始化
 */
componentDidMount(){
  // 地址可以来源于定位
  this.props.cityActions.initCity({
    cityName: '广州'
  })
}
  render() { 
    return ( 
      <div>
        {this.props.children}
      </div>
     )
  }
}

function mapStateToProps(state){
  return {
    city:state.city
  }
}

function mapDispatchToProps(dispatch){
  return {
    cityActions:bindActionCreators(cityActions,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

 