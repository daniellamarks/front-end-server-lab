// import { render } from '@testing-library/react';
import { Component } from 'react';
import './HikeForm.css';

export default class HikeForm extends Component {
  state = {
    name: '',
    difficulty: '',
    url: '',
    lengthInMiles: '',
    terrain: '',
    goodForDogs: '',
  }

  componentDidMount() {
    const { hikeName } = this.props;
    if (!hikeName) return;

    this.setState(hikeName);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleChangeDifficulty = ({ target }) => {
    this.setState({ difficulty: target.value });
  }

  handleChangeUrl= ({ target }) => {
    this.setState({ url: target.value });
  }

  handleChangeLength = ({ target }) => {
    this.setState({ lengthInMiles: target.value });
  }

  handleChangeTerrain = ({ target }) => {
    this.setState({ terrain: target.value });
  }

  handleChangeGoodForDogs = ({ target }) => {
    this.setState({ goodForDogs: target.checked });
  }


  render() {

    const { name, difficulty, url, lengthInMiles, terrain, goodForDogs } = this.state;
    const { hikeName } = this.props;

    return (
      <form className="HikeForm" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Hike Name</span>
            <input name="name" required placeholder="Name of hike..." value={name} onChange={this.handleChangeName}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Difficulty</span>
            <input name="difficulty" required placeholder="Difficulty Level..."
              value={difficulty} onChange={this.handleChangeDifficulty}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Hike Image Url</span>
            <input name="url" required placeholder="URL..."
              value={url} onChange={this.handleChangeUrl}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Length In Miles</span>
            <input name="lengthInMiles" required placeholder="Length in miles..."
              value={lengthInMiles} onChange={this.handleChangeLength}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Terrain</span>
            <input name="terrain" required placeholder="Type of terrain..."
              value={terrain} onChange={this.handleChangeTerrain}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Good for Dogs?</span>
            <span className="vertically-centered">
              <input name="goodForDogs"
                type="checkbox"
                value={goodForDogs} onChange={this.handleChangeGoodForDogs} 
              /> Yes
            </span>
          </label>
        </p>

        <p>
          <button>{hikeName ? 'Edit' : 'Add' } Hike</button>
        </p>         
         
      </form>
    );
  }
};