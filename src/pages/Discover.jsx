import axios from 'axios';
import React, { Component } from 'react'
import Card from '../components/Card';
import DetailMovie from './DetailMovie';
// import { SocialIcon } from 'react-social-icons';

export default class Homepage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Film: []
        }

    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        })
            .then(Response => {
                // console.log(Response.data.results)
                this.setState({ Film: Response.data.results })
            })
    }

    handleTampil(Film) {
        console.log(Film.id)
        this.props.onSubmit(Film.id)
    }

    render() {
        return (
            <section onSubmit={this.handleTampil} className='container min-w-full' >
                <div className='grid grid-flow-col-dense overflow-x-scroll'>
                    {this.state.Film.map((Film, idx) => {
                        return (
                            <Card key={idx} data={Film} tampil={this.handleTampil.bind(this, Film)} />
                        )
                    })}
                </div>
                {/* <p>{this.state.URL}</p> */}
                {/* <DetailMovie URL={this.state.URL} /> */}
            </ section>
        )
    }
}
