import React from "react";
import "./style.less";
import MySwiper from "../../../../components/Swiper";
import DetailHeader from "../../../../components/Header";
import Tabs from '../../../../components/Tabs'
import CommentView from '../CommentView'


export default class DetailView extends React.Component {
  render() {
    const data = this.props.data;
    const comments = this.props.comments
    
    return (
      <div className="detail-info">
        <DetailHeader title={"详情页"} />
        <MySwiper banners={data.imgs} />

        <Tabs>
          <tab tabName="房屋信息">
            <div>
              <h3>{data.title}</h3>
              <div className="box">
                <ul>
                  <li>
                    <span>{data.price}/月</span>
                    <p>租金</p>
                  </li>
                  <li>
                    <span>{data.info.type}/月</span>
                    <p>房型</p>
                  </li>
                  <li>
                    <span>{data.houseType}</span>
                    <p>面积</p>
                  </li>
                </ul>
              </div>
              <div className="info">
                <div className="info-list">
                  <p>楼层：{data.info.level}</p>
                  <p>装修：{data.info.style}</p>
                </div>
                <div className="info-list">
                  <p>类型：{data.info.type}</p>
                  <p>朝向：{data.info.orientation}</p>
                </div>
                <div className="info-list">
                  <p>年代：{data.info.years}</p>
                </div>
              </div>
            </div>
          </tab>
          <tab tabName="房屋评价"><CommentView comments={comments}/></tab>
        </Tabs>
      </div>
    );
  }
}
