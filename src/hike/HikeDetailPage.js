import { Component } from 'react';
// import Loader from '../common/Loader';
import { Link } from 'react-router-dom';
import { getHike, deleteHike } from '../utils/hikes-api';
import './HikeDetailPage.css';

export default class HikeDetailPage extends Component {
  state = {
    hike: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;

    try {
      const hike = await getHike(match.params.id);
      this.setState({ hike: hike });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleDelete = async () => {
    const { hike } = this.state;
    const { history } = this.props;

    const confirmation = `Are you sure you want to delete ${hike.name}?`;

    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading : true });
      await deleteHike(hike.id);
      history.push('/hike');
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading : false });
    }
  }

  render() {
    const { hike } = this.state;

    if (!hike) return null;

    return (
      <div className="HikeDetailPage">
        {/* <Loader loading={loading}/> */}
        
        <div className="Hike Detail">
          <h2>Hike Detail Page</h2>
          <p>Name: {hike.name}</p>
          <img  
            alt={hike.name}
            src={hike.url}
          />
          <p>Difficulty: {hike.difficulty}</p>
          <p>Length In Miles: {hike.lengthInMiles}</p>
          <p>terrain: {hike.terrain}</p>
        </div>


              
        <Link to={`/hikes/${hike.id}/edit`}>
          Edit this Hike
        </Link>
        
        <button className="delete" onClick={this.handleDelete}>
          Delete this Hike
        </button>
      </div>
    );
  }

}