import React from 'react';
import CityHeader from "../../components/Header";
import CurrentCity from "./CurrentCity";
import HotCity from "./HotCity";

export default class City extends React.Component {
  render() { 
    return (
      <div>
        <CityHeader title="城市选择" />
        <CurrentCity city="广州" />
        <HotCity />
      </div>
    );
  }
}
 