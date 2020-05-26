import React from 'react';

class Main extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      fontWeight: "Bold",
      fontSize: "50px",
      textAlign: "center",
      marginTop: "15%"
    };
    return (
      <div>
      <h1 style={mystyle}>
      LET'S BUILD SOMETHING <br />AMAZING TOGETHER
      
      </h1>
    </div>
    )
  }
}
export default Main