import React from "react";

import './style.less'


export default class HomeHot extends React.Component {
  
  render() {
    const data = this.props.data
    // console.log(data);
    
    return (
      <div>
        <div className="hotproduct">
          <h3>{this.props.title}</h3>
          <div className="hot-container">
            <ul className="clear-fix">
              {data.map((element, index) => {
                return (
                  <li key={element.id}>
                    <a href={element.link}>
                      <img src={element.img} alt={element.title} />
                      <span>{element.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
