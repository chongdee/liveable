import React from 'react';
import './style.less'
export default class SearchInput extends React.Component{
  constructor(props){
    super(props)
    this.state={
      values:''
    }
  }

  getValuesHandle=(e) =>{
    this.setState({
      values:e.target.value
    })
  }

  onKeyUphandle=(e)=>{
    /* 
    按回车跳转搜索页,
    由于组件没有被路由管理所以父组件要属性要写history={this.props.history} 
    */
    if(e.keyCode == 13){
      // 通过父组件传history
      this.props.history.push('/search/'+ this.state.values)
    }
  }

  render(){
    return (
      
        <input
          type="text"
          className="search-input"
          value={this.state.values}
          placeholder="请输入搜索内容"
          onKeyUp={this.onKeyUphandle}
          onChange={this.getValuesHandle}
        />
      
    );
  }
}