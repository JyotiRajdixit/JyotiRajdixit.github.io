 import React from 'react';

 class Footer extends React.Component {
   render() {
     const mystyle = {
       textAlign: "center",
       marginTop: "5%"
     }
     return (

       <div className="social-buttons" style={mystyle}>
    <a href="https://github.com/JyotiRajdixit"><i class="fab fa-github"></i></a>
    <a href="mailto:jyotirajdixit50@gmail.com"><i class="fas fa-at"></i></a>
     <a href="https://m.facebook.com/jrd.dixit?ref=bookmarks"><i class="fab fa-facebook-f"></i></a>
    </div>

     )
   }
 }
 export default Footer