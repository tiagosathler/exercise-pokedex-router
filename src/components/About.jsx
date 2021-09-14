import React from 'react';
import '../styles/about.css';

const About = () => (
  <section>
    <h2> About Pokédex </h2>
    <section>
      <p> This application simulates a Pokédex, a digital encliclopedia containing all Pokémons </p>
      <p> One can filter Pokémons by type, and see more details for each one of them </p>
      <img
        className="pokedex-image"
        src="https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png"
        alt="Pokédex"
      />
      <br />
      <a
        href="https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex"
        target="_blank"
        rel="noreferrer noopener"
        >Pokédex</a>
    </section>
  </section>
);

export default About;