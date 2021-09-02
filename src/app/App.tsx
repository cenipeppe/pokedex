import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../components";
import { HomePage } from "../pages/HomePage";
import { PokemonPage } from "../pages/PokemonPage";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />

        <BrowserRouter>
          <Switch>
            <Route path={`/pokemon/:id`}>
              <PokemonPage />
            </Route>
            <Route path={`/`}>
              <HomePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
