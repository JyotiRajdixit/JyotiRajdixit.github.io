import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';


class App extends React.Component {
  render() {
    return (
      <div>
       <div id="hero">
        <div class="layer layer-bg" data-type="parallax" data-depth="0.10"> 
        </div>
        <div class="layer layer-1" data-type="parallax" data-depth="0.20">
        </div>
        <div class="layer layer-2" data-type="parallax" data-depth="0.50">
        </div>
        <div class="layer layer-overlay" data-type="parallax" data-depth="0.70">     
        </div>
        <div class="layer layer-3" data-type="parallax" data-depth="0.75">
        </div>
        <div class="layer layer-4" data-type="parallax" data-depth="1.00">
      
        </div>
      
      </div>
      < div class = "content" >
      <Header />
      <Main />
      <Footer />
      </div> 
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);