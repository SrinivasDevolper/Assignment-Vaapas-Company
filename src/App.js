import { Component } from 'react';
import SearchBar from './Component/SearchBar/SearchBar';
import MovieCard from "./Component/MovieCard/MovieCard"
import ScaleLoader from "react-spinners/ScaleLoader";

import './App.css';

class App extends Component {
  state = { showError: false, showErrorMsg: "", loading: false, movieData: [], movieDataDisplay: false }

  getMovieData = async (query) => {
    this.setState({ showError: false, showErrorMsg: '', loading: true, movieDataDisplay: false })
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await response.json()
      console.log(data.docs)
      this.setState({ movieData: data.docs, movieDataDisplay: true })
    }
    catch (error) {
      console.log(error, "error")
      this.setState({ showError: true, showErrorMsg: 'Failed to fetch movies. Please try again.' })
    }
    this.setState({ loading: false })
  }

  render() {
    const { showError, showErrorMsg, loading, movieData, movieDataDisplay} = this.state
    return (
      <div className="movie-main-container">
        <div className='bg-container'>
          <h1 className='heading'>Movie Search App</h1>
          <SearchBar getMovieData={this.getMovieData} />
          {showError && <p className='error-msg'>*{showErrorMsg}</p>}
          <div className='status-container' id='statusContainer'>
            {loading && <ScaleLoader
              color="red"
              loading={loading}
              // cssOverride={override}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />}
            {movieDataDisplay && <MovieCard movieData={movieData} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
