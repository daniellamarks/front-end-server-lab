import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import HikesPage from '../hikes/HikesPage';
import HikeDetailPage from '../hikes/HikeDetailPage';
// import HikeAddPage from '../hike-add/HikeAddPage';
// import HikeEditPage from '../hike-edit/HikeEditPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/hikes" exact={true}
                render={routerProps => (
                  <HikesPage {...routerProps}/>
                )}
              />
{/* 
              <Route path="/hikes/add" exact={true}
                render={routerProps => (
                  <HikeAddPage {...routerProps}/>
                )}
              /> */}

              <Route path="/hikes/:id" exact={true}
                render={routerProps => (
                  <HikeDetailPage {...routerProps.match.params.id}/>
                )}
              />

              {/* <Route path="/hikes/:id/edit" exact={true}
                render={routerProps => (
                  <HikeEditPage {...routerProps}/>
                )}
              /> */}

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
