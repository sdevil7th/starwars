import React from "react";
import { connect } from "react-redux";

import Sidebar from "../../components/Sidebar";
import RightPanel from "../../components/RightPanel";

import {
  getPlanetList,
  getMovieList,
  getSearchedPlanetList
} from "../../store/actions/HomepageActions";

const typeList = ["Planets", "Movies"];

class Homepage extends React.Component {
  state = {
    selectedType: "",
    selectedItem: "",
    favourite: { planets: [], movies: [] },
    searchText: ""
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedType !== this.state.selectedType) {
      // this.setState({ searchText: "" });
      if (this.state.selectedType === "Planets") this.props.getPlanetList({});
      else if (this.state.selectedType === "Movies")
        this.props.getMovieList({});
      this.setState({ selectedItem: "" });
    }
  }
  addToFavourite = (item, type) => {
    let favouriteData = JSON.parse(localStorage.getItem("favourite"));
    if (!favouriteData) favouriteData = { planets: [], movies: [] };
    if (type === "Planets") favouriteData.planets.push(item);
    else favouriteData.movies.push(item);
    localStorage.setItem("favourite", JSON.stringify(favouriteData));
    this.setState({ favourite: favouriteData });
  };
  removeFromFavourite = (item, type) => {
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
  handleTextChange = text => {
    this.setState({ searchText: text });
    this.props.onSearchPlanet({ searchText: text });
  };
  onChangeHandler = (value, name) => {
    this.setState({ [name]: value });
    console.log(name, value);
  };
  render() {
    return (
      <React.Fragment>
        <Sidebar
          onChangeHandler={this.onChangeHandler}
          typeList={typeList}
          selectedType={this.state.selectedType}
          selectedItem={this.state.selectedItem}
          planets={this.props.planets}
          getNextPlanets={this.props.getPlanetList}
          movies={this.props.movies}
          getNextMovies={this.props.getMovieList}
          onChangeSearch={this.handleTextChange}
          searchText={this.state.searchText}
        />
        {this.state.selectedType && this.state.selectedItem ? (
          <RightPanel
            selectedType={this.state.selectedType}
            selectedItem={this.state.selectedItem}
            addToFavourite={this.addToFavourite}
            removeFromFavourite={this.removeFromFavourite}
            favourites={this.state.favourite}
          />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    planets: state.home.planets,
    movies: state.home.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPlanetList: payload => dispatch(getPlanetList(payload)),
    getMovieList: payload => dispatch(getMovieList(payload)),
    onSearchPlanet: payload => dispatch(getSearchedPlanetList(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
