import { Component } from 'react';
import HikeForm from '../common/HikeForm';
import Loader from '../common/Loader';
import { addHike } from '../utils/hikes-api';
import './HikeAddPage.css';

export default class CatAddPage extends Component {
  state = {
    loading: false
  }

  handleAdd = async hike => {
    // because we pass router props in App.js
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      // this returns the new hike object
      const newHike = await addHike(hike);
      // includes id
      history.push(`/hike/${newHike.id}`);
      console.log(newHike);
    }
    catch (err) {
      this.setState({ loading: false });
      console.log(err.message);
    }
  }

  render() {    
    const { loading } = this.state;

    return (
      <div className="HikeAddPage">
        <Loader loading={loading}/>

        <h2>Add a Hike</h2>
        <HikeForm onSubmit={this.handleAdd}/>
      </div>
    );
  }

}