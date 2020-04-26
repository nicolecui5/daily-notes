import React from "react";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { Calendar } from "./components/calendar";

const store = createStore({});

const App = () => (
  <ReduxProvider>
    <Calendar />
  </ReduxProvider>
);

export default App;
