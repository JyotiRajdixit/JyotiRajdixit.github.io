
import React from 'react';
 
 
  class Footer extends React.Component {
    render() {
      const li = {
        listStyle: "none",
        marginRight: "10px",
        display: "inline-block",
        fontSize: "15px",
        padding: "20px 20px",
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "50%",
        transition: ".5s",
      };
      return(
        <div class="media">
    <a href="https://m.facebook.com/jrd.dixit?ref=bookmarks"> <li style={li}><i class="fa fa-facebook-square"></i></li></a>
    <a href="mailto:jyotirajdixit50@gmail.com">	<li style={li}><i class="fa fa-envelope"></i></li></a>
    <a href="https://github.com/JyotiRajdixit"> <li style={li}><i class="fa fa-github"></i></li></a>
   </div>
      )
    }
  }
  export default Footer
