// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.filter = this.filter.bind(this);
    this.newMovie = this.newMovie.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.moviesByGenre = this.moviesByGenre.bind(this);
    this.favoriteMovies = this.favoriteMovies.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onBookmarkedChange(event) {
    console.log(event.target.checked);
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  onSelectedGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  newMovie(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  moviesByGenre() {
    const { movies, selectedGenre } = this.state;
    return movies.filter(({ genre }) => (
      genre.includes(selectedGenre)
    ))
      .map((moviee) => moviee);
  }

  favoriteMovies() {
    const { movies } = this.state;
    return movies.filter(({ bookmarked }) => bookmarked)
      .map((moviee) => moviee);
  }

  filter(input) {
    const { searchText } = this.state;
    return input.filter(({ title, subtitle, storyline }) => (
      title.toUpperCase().includes(searchText.toUpperCase())
      || subtitle.toUpperCase().includes(searchText.toUpperCase())
      || storyline.toUpperCase().includes(searchText.toUpperCase())
    ))
      .map((moviee) => moviee);
  }

  filterMovies() {
    const { movies, bookmarkedOnly, selectedGenre } = this.state;
    if (selectedGenre !== '') return this.filter(this.moviesByGenre());
    if (bookmarkedOnly) return this.filter(this.favoriteMovies());
    return this.filter(movies);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2 className="page-subtitle"> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.filterMovies() } />
        <AddMovie onClick={ this.newMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
