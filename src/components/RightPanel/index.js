import React from "react";
import "./RightPanel.scss";

const rightPanel = props => {
  let add = true;
  let favouriteData = JSON.parse(localStorage.getItem("favourite"));
  if (favouriteData) {
    if (
      props.selectedType === "Planets" &&
      favouriteData.planets.find(item => item.name === props.selectedItem.name)
    )
      add = false;
    else if (
      props.selectedType === "Movies" &&
      favouriteData.movies.find(item => item.title === props.selectedItem.title)
    )
      add = false;
  }
  return (
    <div className="right-panel">
      {props.selectedType === "Planets" ? (
        <Planet
          data={props.selectedItem}
          onClickFavourite={
            add ? props.addToFavourite : props.removeFromFavourite
          }
          add={add}
        />
      ) : (
        <Movie
          data={props.selectedItem}
          onClickFavourite={
            add ? props.addToFavourite : props.removeFromFavourite
          }
          add={add}
        />
      )}
    </div>
  );
};

export default rightPanel;

const Planet = props => {
  return (
    <div className="right-panel_content">
      <div className="panel-content-header">
        {props.data.name}
        {props.add ? (
          <button onClick={() => props.onClickFavourite(props.data, "Planets")}>
            <AddIcon />
            Add as Favourite
          </button>
        ) : (
          <button onClick={() => props.onClickFavourite(props.data, "Planets")}>
            <RemoveIcon />
            Remove from Favourite
          </button>
        )}
      </div>
      <p className="panel-content-data">
        <span>Rotation Period: </span>
        {props.data.rotation_period}
      </p>
      <p className="panel-content-data">
        <span>Orbital Period: </span>
        {props.data.orbital_period}
      </p>
      <p className="panel-content-data">
        <span>Diameter: </span>
        {props.data.diameter}
      </p>
      <p className="panel-content-data">
        <span>Climate: </span>
        {props.data.climate}
      </p>
      <p className="panel-content-data">
        <span>Gravity: </span>
        {props.data.gravity}
      </p>
      <p className="panel-content-data">
        <span>Terrain: </span>
        {props.data.terrain}
      </p>
      <p className="panel-content-data">
        <span>Surface Water: </span>
        {props.data.surface_water}
      </p>
      <p className="panel-content-data">
        <span>Population: </span>
        {props.data.population}
      </p>
    </div>
  );
};

const Movie = props => {
  return (
    <div className="right-panel_content">
      <div className="panel-content-header">
        {props.data.title}
        {props.add ? (
          <button onClick={() => props.onClickFavourite(props.data, "Movies")}>
            <AddIcon />
            Add as Favourite
          </button>
        ) : (
          <button onClick={() => props.onClickFavourite(props.data, "Movies")}>
            <RemoveIcon />
            Remove from Favourite
          </button>
        )}
      </div>
      <p className="panel-content-data">
        <span>Episode: </span>
        {props.data.episode_id}
      </p>
      <p className="panel-content-data">
        <span>Story so far: </span>
        {props.data.opening_crawl}
      </p>
      <p className="panel-content-data">
        <span>Director: </span>
        {props.data.director}
      </p>
      <p className="panel-content-data">
        <span>Producer: </span>
        {props.data.producer}
      </p>
      <p className="panel-content-data">
        <span>Release Date: </span>
        {props.data.release_date}
      </p>
    </div>
  );
};

const AddIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 25 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.6786 13.6786C19.6786 14.245 19.2093 14.7143 18.6429 14.7143H14.5V18.8571C14.5 19.4235 14.0307 19.8929 13.4643 19.8929H11.3929C10.8265 19.8929 10.3571 19.4235 10.3571 18.8571V14.7143H6.21429C5.64788 14.7143 5.17857 14.245 5.17857 13.6786V11.6071C5.17857 11.0407 5.64788 10.5714 6.21429 10.5714H10.3571V6.42857C10.3571 5.86216 10.8265 5.39286 11.3929 5.39286H13.4643C14.0307 5.39286 14.5 5.86216 14.5 6.42857V10.5714H18.6429C19.2093 10.5714 19.6786 11.0407 19.6786 11.6071V13.6786ZM24.8571 12.6429C24.8571 5.78125 19.2902 0.214284 12.4286 0.214284C5.56696 0.214284 0 5.78125 0 12.6429C0 19.5045 5.56696 25.0714 12.4286 25.0714C19.2902 25.0714 24.8571 19.5045 24.8571 12.6429Z" />
  </svg>
);
const RemoveIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
