import React from "react";

import RadioBtn from "../RadioButton";

import "./Sidebar.scss";

const sidebar = props => {
  let content = [];
  if (props.selectedType === "Planets") {
    props.planets.data.map((item, index) => {
      content.push(
        <div
          className={
            "radio-btn-sublist" +
            (props.selectedItem.name === item.name
              ? " radio-btn-sublist--selected"
              : "")
          }
          key={"planets" + index}
          onClick={() =>
            item.name !== props.selectedItem.name
              ? props.onChangeHandler(item, "selectedItem")
              : null
          }
        >
          {item.name}
        </div>
      );
      return null;
    });
  } else if (props.selectedType === "Movies") {
    props.movies.data.map((item, index) => {
      content.push(
        <div
          className={
            "radio-btn-sublist" +
            (props.selectedItem.title === item.title
              ? " radio-btn-sublist--selected"
              : "")
          }
          key={"movies" + index}
          onClick={() =>
            item.title !== props.selectedItem.title
              ? props.onChangeHandler(item, "selectedItem")
              : null
          }
        >
          {item.title}
        </div>
      );
      return null;
    });
  }
  return (
    <div className="sidebar">
      {props.typeList.map((item, index) => {
        return (
          <RadioBtn
            key={"typeList" + index}
            currentValue={props.selectedType}
            name="typeList"
            value={item}
            text={item}
            onChange={event =>
              props.onChangeHandler(event.target.value, "selectedType")
            }
            content={item === props.selectedType ? content : null}
            onFetchNext={
              item === "Planets" ? props.getNextPlanets : props.getNextMovies
            }
            next={item === "Planets" ? props.planets.next : props.movies.next}
            selectedType={props.selectedType}
            onChangeSearch={props.onChangeSearch}
          />
        );
      })}
    </div>
  );
};

export default sidebar;
