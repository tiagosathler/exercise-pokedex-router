import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import About from './components/About';
import FavoritePokemons from './components/FavoritePokemons';
import NotFound from './components/NotFound';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import {
  readFavoritePokemonIds,
  updateFavoritePokemons,
} from './services/pokedexService';

import pokemons from './data/data';

import './styles/App.css';

class App extends React.Component {
  static setIsPokemonFavoriteById() {
    const favoritePokemonIds = readFavoritePokemonIds();
    const isPokemonFavorite = pokemons.reduce((acc, pokemon) => {
      acc[pokemon.id] = favoritePokemonIds.includes(pokemon.id);
      return acc;
    }, {});

    return isPokemonFavorite;
  }

  constructor(props) {
    super(props);
    this.state = { isPokemonFavoriteById: App.setIsPokemonFavoriteById() };
  }

  onUpdateFavoritePokemons(pokemonId, isFavorite) {
    updateFavoritePokemons(pokemonId, isFavorite);

    this.setState(({ isPokemonFavoriteById: App.setIsPokemonFavoriteById() }));
  }

  render() {
    const { isPokemonFavoriteById } = this.state;
    const favoritePokemons = pokemons.filter(({ id }) => isPokemonFavoriteById[id]);
    return (
      <div className="App">
        <h1> Pokédex </h1>
        <nav>
          <Link className="link" to="/"> Home </Link>
          <Link className="link" to="/about"> About </Link>
          <Link className="link" to="/favorites"> Favorite Pokémons </Link>
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Pokedex
              pokemons={pokemons}
              isPokemonFavoriteById={isPokemonFavoriteById}
            />
            }
          />
          <Route
            path="/pokemons/:id"
            render={({ match }) => <PokemonDetails
              isPokemonFavoriteById={isPokemonFavoriteById}
              match={match}
              pokemons={pokemons}
              onUpdateFavoritePokemons={(pokemonId, isFavorite) => (
                this.onUpdateFavoritePokemons(pokemonId, isFavorite)
              )}
            />}
          />
          <Route path="/favorites" render={() => <FavoritePokemons pokemons={favoritePokemons} />} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;