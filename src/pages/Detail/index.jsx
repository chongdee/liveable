import React from 'react'
import DetailData from "./DetailData";

export default class Detail extends React.Component {
  render () {
    return (
      <DetailData id={this.props.match.params.id}/>
    )
  }
}

