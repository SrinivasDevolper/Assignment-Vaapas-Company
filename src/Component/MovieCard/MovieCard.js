import MovieCardList from "../MovieCardList/MovieCardList"

import NosearchRes from "./no_search_image.png"

import "./index.css"

const MovieCard = (props) => {
    const { movieData } = props
    return (
        <>
            { movieData.length > 0 ?
                movieData.map((eachData) => (
                    <MovieCardList key={eachData.key}
                        title={eachData.title}
                        author={eachData.author_name ? eachData.author_name.join(', ') : 'Unknown'}
                        year={eachData.first_publish_year} />
                ))
            :
            <div className="no-results-cont">
                <img src={NosearchRes} alt="no search items" />
                <p>No items match your search</p>
            </div>
            }
        </>
    )
}

export default MovieCard