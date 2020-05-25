import React, { Component } from 'react';

export default class Toggle extends Component {

  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    
    const mystyle = {
      color: "white",
      fontFamily: "Arial",
      width: "60%",
      background: "#58CCED",
      borderRadius: "30px",
      textAlign: "center",
      marginBottom: "10px",
      marginLeft: "20%",
      boxShadow: "2px 5px 2px 0px #888888"
    };

    return (
      <div>
          <div style={mystyle}>
            <a onClick={this.toggle}>
              <h1>{this.props.semst}</h1>
            </a>
          </div>
          <div>
            {this.state.on && this.props.children }
          </div>
      </div>
    );
  }
}