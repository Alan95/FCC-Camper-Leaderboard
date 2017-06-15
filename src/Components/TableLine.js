import React, { Component } from 'react';


class TableLine extends Component {

  render() {
  let imgStyle = {
    width: "100px",
    height: "100px"
  }
  let tdStyle = {
    verticalAlign: "middle"
  }
  return (

      <tr key={this.props.counter}>
      <th style={tdStyle} scope="row">{this.props.counter}</th>
      <td style={tdStyle}><img alt="" src={this.props.img} style={imgStyle}/></td>
      <td style={tdStyle}>{this.props.username}</td>
      <td style={tdStyle}>{this.props.alltime}</td>
      <td style={tdStyle}>{this.props.recent}</td>
      </tr>
   );
}
}
export default TableLine;
