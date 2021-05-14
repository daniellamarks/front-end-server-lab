import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <header>
          <h2>Welcome to Forest Park Hikes</h2>
        </header>

        <Link to='/hikes'>
          <img  
            className="hikes-pic"
            alt="hikes pic"
            src="/forestpark.jpeg"
          />
          See the List
        </Link>
      </div>
    );
  }

}