import { Component } from "react";

import { IoMdSearch } from "react-icons/io";

import "./index.css"

class SearchBar extends Component {
    state = {searchValue: ""}

    searchQuory = (event) => this.setState({searchValue : event.target.value})

    handleSubmit = (event) => {
        event.preventDefault();
        const {getMovieData} = this.props
        const {searchValue} = this.state
        if (searchValue.trim()){
            getMovieData(searchValue)
        }
    }

    render() {
        const {searchValue} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="search-container">
                    <button htmlFor="searchIcon" type="submit" className="search-icon"><IoMdSearch /></button>
                    <input id="searchIcon" className="searchBar" type="search" placeholder="Search for a movie" value={searchValue} onChange={this.searchQuory}/>
                </div>
            </form>
        )
    }
}

export default SearchBar