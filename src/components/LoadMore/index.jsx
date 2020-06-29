import React from 'react';

import './style.less'

export default class LoadMore extends React.Component{
  constructor(){
    super()
    this.load = React.createRef()
  }

  
    componentDidMount(){
        const loadDiv = this.load.current;
        // 获取页面高度
        const winHeight = document.documentElement.clientHeight;

        // 声明定时器
        let timer = null;
 
        // 绑定this
        const _this = this;

        // 加载判断的函数
        function loadHandler(){
            // getBoundingClientRect:获取当前元素的边距
            let top = loadDiv.getBoundingClientRect().top;
            if(winHeight >= top){
                // 应该加载更多数据了
                _this.props.onLoadMore();
            }
        }

        // 添加滚动事件
        window.addEventListener("scroll",function(event){
            // 只执行一次,防抖
            if(timer){
                clearTimeout(timer)
            }
            timer = setTimeout(function(){
                loadHandler(); 
            },300)
        })  
    }

    componentWillUnmount(){
      // 取消滚动事件
      window.onscroll = null
    }

  render(){
    return(
      <div className='wrapper' ref = {this.load}>
        加载更多
      </div>
    )
  }
}