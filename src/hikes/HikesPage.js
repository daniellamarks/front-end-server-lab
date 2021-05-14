import { Component } from 'react';
import HikeList from './CatList';
import Loader from '../common/Loader';
import { getHikes } from '../utils/hikes-api';
import './HikesPage.css';

export default class CatsPage extends Component {
  state = {
    hike: [],
    loading: true
  }

  async componentDidMount() {
    try {
      const hikes = await getHikes();
      this.setState({ hikes: hikes });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { hikes, loading } = this.state;

    return (
      <div className="CatsPage">
        <Loader loading={loading}/>
        
        <h2>List o' Hikes</h2>
        <HikeList hikes={hikes}/>
      </div>
    );
  }

}