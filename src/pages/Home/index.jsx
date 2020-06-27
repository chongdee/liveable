import React from 'react';

import FootNav from "../../components/FootNav";
import MySwiper from "../../components/Swiper";

import HomeHeader from "./HomeHeader";
import HomeHot from "./HomeHot";


// 引入轮播图
import banner1 from '../../static/images/banner1.png'
import banner2 from '../../static/images/banner2.png'
import banner3 from '../../static/images/banner3.png'

import {connect} from 'react-redux'

class Home extends React.Component{
  render(){
    return (
      <div>
        <HomeHeader city={this.props.city.cityName} history={this.props.history}/>
        <MySwiper banners={[banner1, banner2, banner3]} />
        <HomeHot/>
        <FootNav />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.city,
  };
}


export default connect(mapStateToProps)(Home);