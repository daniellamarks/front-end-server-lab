import { Component } from 'react';
import HikeForm from '../common/HikeForm.js';
import { updateHike, getHike } from '../utils/hikes-api';
import './HikeEditPage.css';

export default class HikeEditPage extends Component {
  state = {
    hike: null,
    loading: false
  }

  async componentDidMount() {
    const { match } = this.props;

    const hike = await getHike(match.params.id);
    if (hike) {
      this.setState({ hike: hike });
    }
    else {
      console.log('No hike received. Check id and network tab');
    }
  }

  handleEdit = async hike => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      await updateHike(hike);
      history.push(`/hike/${hike.id}`);
    }
    catch (err) {
      console.log('ERROR', err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { hike } = this.state;
    if (!hike) return null;

    return (
      <div className="HikeEditPage">
        <h2>Edit {hike.name}</h2>
        <HikeForm hikeName={hike} onSubmit={this.handleEdit}/>
      </div>
    );
  }
}