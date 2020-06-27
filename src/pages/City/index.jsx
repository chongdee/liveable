import React from 'react';
import CityHeader from "../../components/Header";
import CurrentCity from "./CurrentCity";
import HotCity from "./HotCity";

import { connect } from "react-redux";
import * as cityActions from '../../actions/city'
import {bindActionCreators} from 'redux'

/* 
  城市初始化来源
    1. 定位
    2. 用户选择
    3. 系统自己赋值
*/
class City extends React.Component {
  
  onHandleCityName=(cityName)=>{
    // console.log(cityName);
    this.props.cityActions.updateCity({
      cityName
    });

    window.history.back()
  }
  render() {
    return (
      <div>
        <CityHeader title="城市选择" />
        <CurrentCity city={this.props.city.cityName} />
        <HotCity handleCityName={this.onHandleCityName} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.city,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cityActions:bindActionCreators(cityActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(City);