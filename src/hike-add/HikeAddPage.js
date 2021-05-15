// import { Component } from 'react';
// import HikeForm from '../common/HikeForm';
// // import Loader from '../common/Loader';
// import { addHike } from '../utils/hikes-api';
// import './HikeAddPage.css';

// export default class CatAddPage extends Component {
//   state = {
//     loading: false
//   }

//   handleAdd = async catToAdd => {
//     // because we pass router props in App.js
//     const { history } = this.props;

//     try {
//       this.setState({ loading: true });
//       // this returns the newly minted cat object
//       const newCat = await addCat(catToAdd);
//       // which includes its id!
//       history.push(`/cats/${newCat.id}`);
//     }
//     catch (err) {
//       this.setState({ loading: false });
//       console.log(err.message);
//     }
//   }

//   render() {    

//     return (
//       <div className="CatAddPage">
//         <h2>Add a Cat</h2>
//         <CatForm onSubmit={this.handleAdd}/>
//       </div>
//     );
//   }

// }