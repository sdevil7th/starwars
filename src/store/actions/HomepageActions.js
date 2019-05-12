import axios from "axios";
import AwesomeDebouncePromise from "awesome-debounce-promise";

const baseUrl = "https://swapi.co/api/";
const searchAPI = searchText =>
  axios.get(baseUrl + "planets/?search=" + encodeURIComponent(searchText));

const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 1000);

export const getPlanetList = payload => {
  return dispatch => {
    axios
      .get(!payload.next ? `${baseUrl}planets/` : payload.next)
      .then(res => {
        res = res.data;
        console.log(res);
        dispatch({
          type: "GET_PLANET_LIST_SUCCESS",
          data: res.results,
          next: res.next,
          reset: !payload.next
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getSearchedPlanetList = payload => {
  return async dispatch => {
    dispatch({ type: "RESET_SEARCH_RESULT" });
    const result = await searchAPIDebounced(payload.searchText);
    let res = result.data;
    dispatch({
      type: "GET_PLANET_LIST_SUCCESS",
      data: res.results,
      next: res.next
    });
  };
};

export const getMovieList = payload => {
  return dispatch => {
    axios
      .get(!payload.next ? `${baseUrl}films/` : payload.next)
      .then(res => {
        res = res.data;
        console.log(res);
        dispatch({
          type: "GET_MOVIE_LIST_SUCCESS",
          data: res.results,
          next: res.next,
          reset: !payload.next
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
