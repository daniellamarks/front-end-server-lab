import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HikeItem.css';

class HikeItem extends Component {
  
  render() { 
    const hike = this.props.hike;

    return (
      <li className="HikeItem">
        <Link to={`/hikes/${hike.id}`}>
          <h2>{hike.name}</h2>
          <img src={hike.url} alt={hike.name}/>
          <p>Length: {hike.lengthInMiles}</p>
        </Link>
      </li>
    );
  }

}
 
export default HikeItem;