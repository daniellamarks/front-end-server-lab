
import React, { Component } from 'react';
import HikeItem from './HikeItem';
import './HikeList.css';


class HikeList extends Component {
  
  render() { 
    //from HikePage.js
    const { hikes } = this.props;

    return (
      <ul className="HikeList">
        {hikes.map(hike => (
          <HikeItem key={hike.id} hike={hike}/>
        ))}
      </ul>
    );
  }

}
 
export default HikeList;