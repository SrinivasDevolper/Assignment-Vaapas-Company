import { Component } from "react";

import "./index.css"

class MovieCardList extends Component {
    state = { imageUrl: "" }

    componentDidMount() {
        this.randomData()
    }

    randomData = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json()
        this.setState({ imageUrl: data.message })
    }

    render() {
        const { imageUrl } = this.state
        const { title, author, year } = this.props
        return (
            <div className="card-container">
                <img src={imageUrl} alt="random image" />
                <div className="card-items">
                <h1>{typeof title === 'string' && title.length > 0 ? (title.length > 20 ? title.slice(0, 20) + '...' : title) : 'Title not available'}</h1>
                <p>{author}</p>
                <p className="year">{year}</p>
                </div>
            </div>
        )
    }
}

export default MovieCardList