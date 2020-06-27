import React from "react";
import './style.less'

export default class Header extends React.Component {

  handleBack=()=> {
    window.history.back()
  }
  render(){
        return(
            <div className="common-header">
                <span className="back-icon" onClick={this.handleBack}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{ this.props.title }</h1>
            </div>
        )
    }
}
