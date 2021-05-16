import { Component } from 'react';
import HikeForm from '../common/AlbumForm';
import { addAlbum } from '../utils/albums-api';
import './HikeEditPage.css';

export default class HikeEditPage extends Component {
  state = {
    error: null
  }

  handleEdit = async hike => {
    try {
      const id = await addAlbum(hike);
      console.log(id);
    }
    catch (err) {
      console.log('ERROR', err.message);
    }
  }

  render() {
    return (
      <div className="HikeEditPage">
        <h2>Add a Hike</h2>
        <HikeForm onEdit={this.handleEdit}/>
      </div>
    );
  }
};