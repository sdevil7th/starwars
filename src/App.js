import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Starfield from "./utils/starBackground";

import Header from "./components/Header";
import Homepage from "./containers/Homepage";
import Favourites from "./containers/Favourites";

import "./styles/normalize.scss";
import "./styles/base.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

class App extends React.Component {
  componentDidMount() {
    this.randomiseStars();
  }
  randomiseStars = () => {
    var starfield = new Starfield();
    starfield.initialise(this.starContainer);
    starfield.stars = Math.random() * 100 + 50;
    starfield.minVelocity = Math.random() * 30 + 5;
    starfield.maxVelocity = Math.random() * 50 + starfield.minVelocity;
    starfield.start();
  };
  render() {
    return (
      <div className="App">
        <div
          className="starContainer"
          ref={elem => (this.starContainer = elem)}
        />
        <Router>
          <React.Fragment>
            <Header />
            <div className="content">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => <Homepage {...props} />}
                />
                <Route
                  exact
                  path="/favourites"
                  render={props => <Favourites {...props} />}
                />
                <Redirect from="/" to="/" />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
