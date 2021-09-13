import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import pokemons from "./data";
import Pokedex from "./Pokedex";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='pokedex'>
          <h1> Pokedex </h1>
          <nav>
            
          </nav>
          <Switch>
            <Route 
              exact
              path="/"
              render={ () => (<Pokedex pokemons={pokemons} />)}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
