import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';

const initialMovies = [
  {
    title: 'The Dark Knight',
    description: 'After Gordon, Dent and Batman begin an assault on Gothams organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.',
    posterURL: 'https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
    rating: 4.5,
  },
  {
    title: 'Logan',
    description: 'Logan comes out of retirement to escort a young mutant named Laura to a safe place. He meets with other mutants, who run from an evil corporation that has been experimenting with them, along the way.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg',
    rating: 3.8,
  },
  {
    title: 'Deadpool',
    description: 'Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.',
    posterURL: 'https://resizing.flixster.com/fa2s8VzSsYAgqVHQJoxH6SxBE4A=/300x300/v2/https://flxt.tmsimg.com/assets/p11098044_v_v8_ax.jpg',
    rating: 4,
  },
  {
    title: 'Man of Steel',
    description: 'Clark learns about the source of his abilities and his real home when he enters a Kryptonian ship in the Artic. However, an old enemy follows him to Earth in search of a codex and brings destruction.',
    posterURL: `https://flxt.tmsimg.com/assets/p9259673_p_v8_ag.jpg`,
    rating: 4.2,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filter, setFilter] = useState({ title: '', rating: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(filter.title.toLowerCase());
    const ratingMatch = movie.rating >= parseFloat(filter.rating) || filter.rating === '';
    return titleMatch && ratingMatch;
  });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;

