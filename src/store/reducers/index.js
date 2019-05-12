import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import HomepageReducer from "./HomepageReducer";

export default () => {
  return createStore(
    combineReducers({
      home: HomepageReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
};
