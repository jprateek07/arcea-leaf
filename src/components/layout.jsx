import React from 'react';
import Header from './header'
import Footer from './footer'
import { BrowserRouter as Router } from 'react-router-dom';
function layout(props) {
  return (
    <>
      <Router>
        <Header />
        {props.children}
        <Footer />
      </Router>
    </>
  );
}

export default layout;