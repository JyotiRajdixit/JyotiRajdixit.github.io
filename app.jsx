import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';


class App extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <Main />
      <Footer />
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);