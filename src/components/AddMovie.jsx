// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import AddMovieInputTitle from './AddMovieInputTitle';
import AddMovieInputSubtitle from './AddMovieInputSubtitle';
import AddMovieInputImagePath from './AddMovieInputImagePath';
import AddMovieInputStoryline from './AddMovieInputStoryline';
import AddMovieInputRating from './AddMovieInputRating';
import AddMovieInputGenre from './AddMovieInputGenre';

const objState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = objState;
  }

  handleClik = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(objState);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <AddMovieInputTitle title={ title } handleChange={ this.handleChange } />
        <AddMovieInputSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <AddMovieInputImagePath
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <AddMovieInputStoryline
          storyline={ storyline }
          handleChange={ this.handleChange }
        />
        <AddMovieInputRating rating={ rating } handleChange={ this.handleChange } />
        <AddMovieInputGenre genre={ genre } handleChange={ this.handleChange } />
        <button type="submit" data-testid="send-button" onClick={ this.handleClik }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
