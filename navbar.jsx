import React, { Component } from 'react';

//Stateless Functional Component

//can not use {this.props....} in Line 12, delete this and add props in () at line 7
 
const NavBar = ({totalCounters}) => {
    console.log("NavBar - Rendered");


    return ( <nav className="navbar bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
          Navbar<span className="badge bg-pill bg-secondary">
            {totalCounters}</span></a>
    </div>
  </nav>);
}
 
export default NavBar;

