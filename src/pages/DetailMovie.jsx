import React, { Component } from 'react'
import axios from 'axios'

export class DetailMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Detail: []

        }

    }

    componentDidMount() {
        console.log(this.props.data);
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${this.props.data}`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        })
            .then(Response => {
                console.log(Response.data)
                this.setState({ Detail: Response.data })
            })
    }

    render() {
        return (
            <article className='container mx-auto bg-green-300'>
                <img src={`${process.env.REACT_APP_IMG_URL}${this.state.Detail.backdrop_path}`} alt="" />
                <img src={`${process.env.REACT_APP_IMG_URL}${this.state.Detail.poster_path}`} alt="" />
                <p>{this.state.Detail.title}</p>
                <p>{this.state.Detail.backdrop_path}</p>
                <p>{this.state.Detail.poster_path}</p>

            </article>
        )
    }
}

export default DetailMovie