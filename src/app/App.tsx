import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../components";
import { HomePage } from "../pages/HomePage";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <div className="app">
      <Header />

      <BrowserRouter>
        <Switch>
          <Route path="/about">About</Route>
          <Route path="/dashboard">Dashboard</Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div></Provider>
  );
};

export default App;
