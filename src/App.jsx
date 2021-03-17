import 'bootstrap/dist/css/bootstrap.min.css';
import RenderPokemon from './components/RenderPokemon';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const handleClick = e => {
    fetch("https://pokeapi.co/api/v2/pokemon?offest=807&limit=807")
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setPokemons(res.results);
      })
      .catch(err => console.error(err))
  }

  // useEffect(() => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon?offest=807&limit=807")
  //     .then((res, err) => {
  //       if (err) {
  //         throw err;
  //       } else {
  //         setPokemons(res.data.results);
  //       }
  //     }).catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1><button className="btn btn-dark" onClick={handleClick}>Fetch Pokemon</button></h1>
      </header>
      <div className="d-flex flex-column align-items-center">
      {
        pokemons.map((p, i) => <RenderPokemon 
                                name={p.name}
                                key={i}
                                idx={i}
        />)
      }
      </div>
    </div>
  );
}

export default App;
