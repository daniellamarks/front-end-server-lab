import { Component } from 'react';
import HikeForm from '../common/HikeForm';
import Loader from '../common/Loader';
import { addHike } from '../utils/hikes-api';
import './HikeAddPage.css';

class HikeAddPage extends Component {
  state = {
    loading: false
  }

  handleAdd = async hike => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      const newHike = await addHike(hike);
      history.push(`/hikes/${newHike.id}`);
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
        {/* <Loader loading={loading}/> */}

        <h2>Add a Hike</h2>
        <HikeForm onSubmit={this.handleAdd}/>
      </div>
    );
  }

}

export default HikeAddPage; 