import React from "react";
import "./style.less";

export default class Tabs extends React.Component {
  /* 
  <tabs>
    <tab tabName='标题1'>
      <div></div>
    <tab>
    <tab tabName='标题2'>
      <div></div>
    <tab>
  <tabs>

  获取结构：props.children

  <div>标题</div>
  <div>内容</div>

  */
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
  }
  // 设置样式高亮
  check_title_index(index) {
    return index === this.state.currentIndex ? "Tab_title active" : "Tab_title";
  }

  check_item_index(index) {
    return index === this.state.currentIndex ? "show" : "hide";
  }

  // 点击tab事件通过下标改变样式
  handleTabStyle(index) {
    this.setState({
      currentIndex: index,
    });
  }

  render() {
    return (
      <div>
        {/* 标签 */}
        <div className="Tab_title_wrap">
          {React.Children.map(this.props.children, (el, index) => {
            return (
              <div
                className={this.check_title_index(index)}
                onClick={this.handleTabStyle.bind(this, index)}
              >
                {el.props.tabName}
              </div>
            );
          })}
        </div>
        {/* 内容 */}
        <div className="Tab_item_wrap">
          {React.Children.map(this.props.children, (el, index) => {
            return (
              <div className={this.check_item_index(index)}>
                {el.props.children}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
