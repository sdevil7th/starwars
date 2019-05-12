import React from "react";
import "./AudioControl.scss";

const audioControl = props => {
  return (
    <div className="audio-control" onClick={props.onClick}>
      {props.play ? <PlayIcon /> : <PauseIcon />}
    </div>
  );
};

export default audioControl;

const PauseIcon = () => (
  <svg
    width="20"
    height="24"
    viewBox="0 0 20 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.5 0H1.5C0.673 0 0 0.673 0 1.5V22.5C0 23.327 0.673 24 1.5 24H6.5C7.327 24 8 23.327 8 22.5V1.5C8 0.673 7.327 0 6.5 0Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.5 0H13.5C12.673 0 12 0.673 12 1.5V22.5C12 23.327 12.673 24 13.5 24H18.5C19.327 24 20 23.327 20 22.5V1.5C20 0.673 19.327 0 18.5 0Z"
      fill="white"
    />
  </svg>
);

const PlayIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.171 10.6597L2.171 0.159738C1.701 -0.0742615 1.157 -0.0502615 0.712 0.225738C0.266 0.500738 0 0.977738 0 1.50174V22.5017C0 23.0247 0.266 23.5017 0.712 23.7777C0.954 23.9277 1.226 24.0027 1.499 24.0027C1.728 24.0027 1.957 23.9497 2.171 23.8437L23.171 13.3437C23.683 13.0877 24 12.5737 24 12.0017C24 11.4297 23.683 10.9157 23.171 10.6597Z"
      fill="white"
    />
  </svg>
);
