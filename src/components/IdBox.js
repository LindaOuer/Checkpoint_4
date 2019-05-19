import React, { Component } from "react";

class IdBox extends Component {
  render() {
    const Box = {
      marginLeft: "0em"
    };

    const ImageStyle = {
      width: "60%",
      height: "70%"
    };

    const level1 = {
      color: "#444444",
      fontSize: "30px"
    };

    const level2 = {
      color: "#bababa",
      fontSize: "20px",
      textTransform: "uppercase",
      fontStyle: "italic",
      fontWeight: "bold"
    };

    return (
      <div style={Box}>
        <img src={this.props.image} alt="" style={ImageStyle} />
        <p style={level1}>
          {this.props.firstName}
          <text style={{ fontWeight: "bold" }}> {this.props.name}</text>
        </p>
        <p style={level2}>{this.props.activity}</p>
        <p style={level2}>{this.props.funct}</p>
      </div>
    );
  }
}

export default IdBox;
