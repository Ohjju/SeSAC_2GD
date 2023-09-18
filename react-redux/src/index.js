import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

function reducer(state = 1, action) {
  if (action.type === "증가") {
    if (action.number && action.number !== "") {
      state = state + Number(action.number);
    } else if (action.number === "") {
      state = state;
    } else {
      state++;
    }
    // 1 증가한 거 return해주어야 함!!
    return state;
  } else if (action.type === "감소") {
    if (action.number && action.number !== "") {
      state = state - Number(action.number);
    } else if (action.number === "") {
      state = state;
    } else {
      state--;
    }
    //return 한번만 쓸거라면 1 감소 먼저하고 return해야 하므로 --가 앞에 위치
    return state;
  } else {
    return state;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

let store = configureStore({ reducer: reducer });
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
