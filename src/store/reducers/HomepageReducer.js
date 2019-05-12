const initialState = {
  planets: { data: [], next: null },
  movies: { data: [], next: null }
};

export default (state = initialState, action = {}) => {
  let newPlanetList = [];
  let newMovieList = [];
  switch (action.type) {
    case "GET_PLANET_LIST_SUCCESS":
      newPlanetList = state.planets.data.slice();
      if (action.reset) newPlanetList = action.data.slice();
      else newPlanetList = newPlanetList.concat(action.data);
      return {
        ...state,
        planets: { data: newPlanetList, next: action.next }
      };
    case "GET_MOVIE_LIST_SUCCESS":
      newMovieList = state.movies.data.slice();
      if (action.reset) newMovieList = action.data.slice();
      else newMovieList = newMovieList.concat(action.data);
      return {
        ...state,
        movies: { data: newMovieList, next: action.next }
      };
    case "RESET_SEARCH_RESULT":
      return {
        ...state,
        planets: { data: [], next: null }
      };
    default:
      return state;
  }
};
