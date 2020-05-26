import React from 'react';

function Header() {
  return (
    <div>
  <nav className="navbar navbar-expand-md navbar-dark">
  
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
   
    </button>
  
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="https://itsjyotiraj.me">Home </a>
        </li>
  
       <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
        <li className="nav-item">
         <a className="nav-link" href="#">Studies</a>
        </li>
      </ul>
     
    </div>
  </nav>
  <div className="myname"> 
    <h1>Jyotiraj Dixit</h1> 
    <p> Hello, friends </p>
  </div>
  </div>
  )
}
export default Header
