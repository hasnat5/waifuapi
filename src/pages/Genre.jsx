import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GenreList from './GenreList'

export class Genre extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Genre: []
        }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/genre/movie/list`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        })
            .then(Response => {
                console.log(Response.data.genres)
                this.setState({ Genre: Response.data.genres })
            })
    }

    handleId(Genre) {
        console.log(Genre)
        this.props.onSubmit(Genre)

    }

    render() {
        return (
            <div onSubmit={this.handleId}>
                {this.state.Genre.map(Genre => {
                    return (
                        <div key={Genre.id}>
                            <Link to={`./name`} onClick={this.handleId.bind(this, Genre)} >{Genre.name}</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Genre