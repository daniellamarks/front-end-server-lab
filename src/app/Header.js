import { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>Forest Parks Hikes ~React~ </h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/hikes">Hikes</NavLink>
        </nav>
      </header>
    );
  }

}
 
export default Header;