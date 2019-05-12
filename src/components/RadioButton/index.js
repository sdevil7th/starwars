import React from "react";
import Scrollbar from "react-perfect-scrollbar";

import "./RadioButton.scss";

const unselectedRadioSVG = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="5" fill="#373B4D" />
    <mask id="path-2-inside-1" fill="white">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10.5C3.51487 10.5 1.5 8.48512 1.5 6C1.5 3.51487 3.51487 1.5 6 1.5C8.48512 1.5 10.5 3.51487 10.5 6C10.5 8.48512 8.48512 10.5 6 10.5ZM6 0C2.68613 0 0 2.68613 0 6C0 9.31388 2.68613 12 6 12C9.31388 12 12 9.31388 12 6C12 2.68613 9.31388 0 6 0Z"
      />
    </mask>
    <path
      d="M6 9.5C4.06716 9.5 2.5 7.93284 2.5 6H0.5C0.5 9.03741 2.96259 11.5 6 11.5V9.5ZM2.5 6C2.5 4.06716 4.06716 2.5 6 2.5V0.5C2.96259 0.5 0.5 2.96259 0.5 6H2.5ZM6 2.5C7.93284 2.5 9.5 4.06716 9.5 6H11.5C11.5 2.96259 9.03741 0.5 6 0.5V2.5ZM9.5 6C9.5 7.93284 7.93284 9.5 6 9.5V11.5C9.03741 11.5 11.5 9.03741 11.5 6H9.5ZM6 -1C2.13384 -1 -1 2.13384 -1 6H1C1 3.23841 3.23841 1 6 1V-1ZM-1 6C-1 9.86616 2.13384 13 6 13V11C3.23841 11 1 8.76159 1 6H-1ZM6 13C9.86616 13 13 9.86616 13 6H11C11 8.76159 8.76159 11 6 11V13ZM13 6C13 2.13384 9.86616 -1 6 -1V1C8.76159 1 11 3.23841 11 6H13Z"
      fill="#A3A5AD"
      mask="url(#path-2-inside-1)"
    />
  </svg>
);

const selectedRadioSVG = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 6C3.75 7.24237 4.75763 8.25 6 8.25C7.24237 8.25 8.25 7.24237 8.25 6C8.25 4.75763 7.24237 3.75 6 3.75C4.75763 3.75 3.75 4.75763 3.75 6ZM6 10.5C3.51487 10.5 1.5 8.48512 1.5 6C1.5 3.51487 3.51487 1.5 6 1.5C8.48512 1.5 10.5 3.51487 10.5 6C10.5 8.48512 8.48512 10.5 6 10.5ZM6 0C2.68613 0 0 2.68613 0 6C0 9.31388 2.68613 12 6 12C9.31388 12 12 9.31388 12 6C12 2.68613 9.31388 0 6 0Z"
      fill="#FFDA00"
    />
  </svg>
);

const radioButton = props => {
  return (
    <React.Fragment>
      <label
        className={
          "radioButtonContainer" +
          (props.big ? " big" : "") +
          (props.odd ? " odd" : "")
        }
      >
        {props.currentValue === props.value
          ? selectedRadioSVG
          : unselectedRadioSVG}
        <span>
          {props.text +
            " " +
            (props.length !== undefined ? `(${props.length})` : "")}
        </span>
        <input
          type="radio"
          value={props.value}
          checked={props.currentValue === props.value ? "checked" : ""}
          name={props.name}
          onChange={props.onChange}
        />
      </label>
      {props.selectedType === "Planets" && props.value === "Planets" ? (
        <div className="planet-search-bar">
          <input
            type="text"
            placeholder="Search by Planet Name..."
            value={props.searchText}
            onChange={event => props.onChangeSearch(event.target.value)}
          />
        </div>
      ) : (
        ""
      )}
      {props.content && props.content.length ? (
        <div className="radio-btn-container--scroll">
          <Scrollbar
            onYReachEnd={() =>
              props.next ? props.onFetchNext({ next: props.next }) : null
            }
          >
            <div className="radio-btn-content">{props.content}</div>
          </Scrollbar>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default radioButton;
