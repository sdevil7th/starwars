import React from "react";
import Scrollbar from "react-perfect-scrollbar";
import { NavLink } from "react-router-dom";

import "./Favourites.scss";

class Favourites extends React.Component {
  state = {
    favourite: {
      planets: [],
      movies: []
    },
    selectedPlanet: "",
    selectedMovie: ""
  };
  componentDidMount() {
    let favouriteData = JSON.parse(localStorage.getItem("favourite"));
    if (favouriteData) this.setState({ favourite: favouriteData });
  }
  removeFromFavourite = (item, type, event) => {
    event.stopPropagation();
    let favouriteData = JSON.parse(localStorage.getItem("favourite"));
    if (!favouriteData) favouriteData = { planets: [], movies: [] };
    console.log(favouriteData.planets.indexOf(item));
    if (type === "Planets")
      favouriteData.planets = favouriteData.planets.filter(
        elem => elem.name !== item.name
      );
    else
      favouriteData.movies = favouriteData.movies.filter(
        elem => elem.title !== item.title
      );
    localStorage.setItem("favourite", JSON.stringify(favouriteData));
    this.setState({ favourite: favouriteData });
  };
  onSelectItem = (name, type) => {
    if (type === "Planets") {
      if (this.state.selectedPlanet !== name)
        this.setState({ selectedPlanet: name });
      else this.setState({ selectedPlanet: "" });
    } else if (type === "Movies") {
      if (this.state.selectedMovie !== name)
        this.setState({ selectedMovie: name });
      else this.setState({ selectedMovie: "" });
    }
  };
  render() {
    return (
      <div className="favourite-container">
        <div className="details-container">
          <div className="details-header">Planets</div>
          <div className="favourite-items-details">
            <Scrollbar>
              {this.state.favourite.planets.length ? (
                this.state.favourite.planets.map((item, index) => (
                  <div
                    className={
                      "favourite-item" +
                      (this.state.selectedPlanet === item.name
                        ? " favourite-item--active"
                        : "")
                    }
                    key={"planets" + index}
                  >
                    <div
                      className={
                        "item-header" +
                        (this.state.selectedPlanet === item.name
                          ? " item-header--selected"
                          : "")
                      }
                      onClick={() => this.onSelectItem(item.name, "Planets")}
                    >
                      <p>{item.name}</p>
                      <RemoveIcon
                        onClick={event =>
                          this.removeFromFavourite(item, "Planets", event)
                        }
                      />
                    </div>
                    {this.state.selectedPlanet === item.name ? (
                      <div className="item-details">
                        <p className="panel-content-data">
                          <span>Rotation Period: </span>
                          {item.rotation_period}
                        </p>
                        <p className="panel-content-data">
                          <span>Orbital Period: </span>
                          {item.orbital_period}
                        </p>
                        <p className="panel-content-data">
                          <span>Diameter: </span>
                          {item.diameter}
                        </p>
                        <p className="panel-content-data">
                          <span>Climate: </span>
                          {item.climate}
                        </p>
                        <p className="panel-content-data">
                          <span>Gravity: </span>
                          {item.gravity}
                        </p>
                        <p className="panel-content-data">
                          <span>Terrain: </span>
                          {item.terrain}
                        </p>
                        <p className="panel-content-data">
                          <span>Surface Water: </span>
                          {item.surface_water}
                        </p>
                        <p className="panel-content-data">
                          <span>Population: </span>
                          {item.population}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))
              ) : (
                <NavLink className="home-redirect" to="/" exact>
                  Please add your favourite planets!
                </NavLink>
              )}
            </Scrollbar>
          </div>
        </div>
        <div className="details-container">
          <div className="details-header">Movies</div>
          <div className="favourite-items-details">
            <Scrollbar>
              {this.state.favourite.movies.length ? (
                this.state.favourite.movies.map((item, index) => (
                  <div
                    className={
                      "favourite-item" +
                      (this.state.selectedMovie === item.title
                        ? " favourite-item--active"
                        : "")
                    }
                    key={"movies" + index}
                  >
                    <div
                      className={
                        "item-header" +
                        (this.state.selectedMovie === item.title
                          ? " item-header--selected"
                          : "")
                      }
                      onClick={() => this.onSelectItem(item.title, "Movies")}
                    >
                      <p>{item.title}</p>
                      <RemoveIcon
                        onClick={event =>
                          this.removeFromFavourite(item, "Movies", event)
                        }
                      />
                    </div>
                    {this.state.selectedMovie === item.title ? (
                      <div className="item-details">
                        <p className="panel-content-data">
                          <span>Episode: </span>
                          {item.episode_id}
                        </p>
                        <p className="panel-content-data">
                          <span>Story so far: </span>
                          {item.opening_crawl}
                        </p>
                        <p className="panel-content-data">
                          <span>Director: </span>
                          {item.director}
                        </p>
                        <p className="panel-content-data">
                          <span>Producer: </span>
                          {item.producer}
                        </p>
                        <p className="panel-content-data">
                          <span>Release Date: </span>
                          {item.release_date}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))
              ) : (
                <NavLink className="home-redirect" to="/" exact>
                  Please add your favourite movies!
                </NavLink>
              )}
            </Scrollbar>
          </div>
        </div>
      </div>
    );
  }
}

export default Favourites;

const RemoveIcon = props => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={props.onClick}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 1C5.71 1 1 5.71 1 11.5C1 17.29 5.71 22 11.5 22C17.29 22 22 17.29 22 11.5C22 5.71 17.29 1 11.5 1ZM11.5 23C5.159 23 0 17.841 0 11.5C0 5.159 5.159 0 11.5 0C17.841 0 23 5.159 23 11.5C23 17.841 17.841 23 11.5 23Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0002 16.5002C15.8722 16.5002 15.7442 16.4513 15.6462 16.3542L6.64625 7.35425C6.45125 7.15825 6.45125 6.84225 6.64625 6.64625C6.84225 6.45125 7.15825 6.45125 7.35325 6.64625L16.3532 15.6462C16.5492 15.8422 16.5492 16.1582 16.3532 16.3542C16.2562 16.4513 16.1283 16.5002 16.0002 16.5002Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.00025 16.5002C6.87225 16.5002 6.74425 16.4513 6.64625 16.3542C6.45125 16.1582 6.45125 15.8422 6.64625 15.6462L15.6462 6.64625C15.8422 6.45125 16.1582 6.45125 16.3532 6.64625C16.5492 6.84225 16.5492 7.15825 16.3532 7.35425L7.35325 16.3542C7.25625 16.4513 7.12825 16.5002 7.00025 16.5002Z"
    />
  </svg>
);
