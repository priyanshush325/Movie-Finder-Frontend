import logo from './static/MovieFinderLogo.svg';
import background from './static/crayonFull.png';
import {Searchbar} from './components/Searchbar.js';
import {AmcTile} from './components/AmcTile.js';
import { RottenTomatoesTile } from './components/RottenTomatoesTile';
import React, {useState} from 'react';
import './App.scss';

function App() {
  const [movieQuery, setMovieQuery] = useState("");
  const [cardsVisible, setCardsVisible] = useState(false);

  function updateMovie(movie){
    setMovieQuery(movie);
    if (movie != null){
      setCardsVisible(true);
    }
  }
  return (
      <div className="App">
          <img src = {background} className = "background" />
          <div className = "content">
            <div className = "padding"></div>
            <img src={logo} className="App-logo" alt="logo" />
            <Searchbar updateMovie={updateMovie}/>
            <div className = "tileContainer">
              {cardsVisible && <AmcTile movie={movieQuery}/>}
              {cardsVisible && <RottenTomatoesTile />}
            </div>
          </div>
      </div>
    );
}

export default App;
