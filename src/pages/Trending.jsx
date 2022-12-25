import axios from 'axios'
import React, { Component } from 'react'
import Card from '../components/Card'

export class Trending extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Trending: []
        }
    }
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BASE_URL}/trending/movie/week`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        })
            .then(Response => {
                console.log(Response.data.results)
                this.setState({ Trending: Response.data.results })
            })
    }

    handleTampil(Film) {
        console.log(Film.id)
        this.props.onSubmit(Film.id)
    }

    render() {
        return (
            <section className='container min-w-full' >
                <div className='grid grid-flow-col-dense overflow-x-scroll'>
                    {this.state.Trending.map((Trending, idx) => {
                        return (
                            <Card key={idx} data={Trending} tampil={this.handleTampil.bind(this, Trending)} />
                        )
                    })}
                </div>
            </ section>
        )
    }
}

export default Trending