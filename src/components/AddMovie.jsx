// implement AddMovie component here
import React from 'react';
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

    this.handleChange = this.handleChange.bind(this);
    this.handleClcik = this.handleClcik.bind(this);
  }

  handleClcik(event) {
    event.preventDefault();
    this.state = objState;
    alert('diego');
  }

  handleChange(event) {
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
        <button type="submit" data-testid="send-button" onClick={ this.handleClcik }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
