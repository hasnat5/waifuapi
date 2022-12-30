import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class GenreList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            GenreResult: []
        }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY,
                with_genres: this.props.genre.id
            }
        })
            .then(Response => {
                console.log(Response.data.results)
                this.setState({ GenreResult: Response.data.results })
            })
    }

    handleTampil(Film) {
        console.log(Film.id)
        this.props.detailHandle(Film.id)
    }

    render() {
        return (
            <section className='container mx-auto'>
                <div className='grid gap-6'>
                    <h1>Result of {this.props.genre.name}</h1>
                    {this.state.GenreResult.map((Film, idx) => {
                        return (
                            <Link onClick={this.handleTampil.bind(this, Film)} to='/detail' key={idx} className='flex gap-5 px-4' >
                                <img className='w-3/12 rounded-xl' src={`${process.env.REACT_APP_IMG_URL}${Film.poster_path}`} alt="" />

                                <div>
                                    <h2>{Film.title}</h2>
                                    <p>{Film.vote_average}</p>
                                    <p>{Film.release_date}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section >
        )
    }
}

export default GenreList