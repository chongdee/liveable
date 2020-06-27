import React from "react";
import Item from "./Item";

export default class SearchListView extends React.Component {
  render() {
    const data = this.props.data;
    // console.log(data);

    return (
      <div className="list-container">
        {data.map((element, index) => {
          return <Item data={element} key={index} />;
        })}
      </div>
    );
  }
}
