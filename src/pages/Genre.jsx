import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IoChevronForward } from 'react-icons/io5'

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
            <section className='bg-primary container mx-auto px-4 py-4' onSubmit={this.handleId}>
                <div className='grid grid-cols-2 gap-2'>
                    {this.state.Genre.map(Genre => {
                        return (
                            <Link to={`./${Genre.name}`} onClick={this.handleId.bind(this, Genre)} className='inline-flex items-center gap-1 p-2 bg-white text-secondary rounded' key={Genre.id}>
                                <IoChevronForward />
                                <p>{Genre.name}</p>
                            </Link>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default Genre