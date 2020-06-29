import React from "react";
import "./style.less";
import Star from '../../../../../components/Star'

export default class CommentItem extends React.Component {
  render() {
    // 获取数据
    const item = this.props.data;

    return (
      <div className="comment-item">
        <h3>
          <i className="icon-user"></i>
          &nbsp;
          {item.username}
        </h3>
        <Star star = {item.star}/>
        <p>{item.comment}</p>
      </div>
    );
  }
}

