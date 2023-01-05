import React, { Component } from 'react'
import axios from 'axios'
import Card from '../components/Card'

export class SearchMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Search: [],
            isClick: 'isClick'
        }

    }

    componentDidMount() {
        console.log(this.props.title)

        axios.get(`https://api.themoviedb.org/3/search/movie/?query=${this.props.title}`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        })
            .then(Response => {
                this.setState({ Search: Response.data.results })

            })
    }

    componentDidUpdate(pP) {
        if (pP.title !== this.props.title) {
            axios.get(`https://api.themoviedb.org/3/search/movie/?query=${this.props.title}`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_KEY
                }
            })
                .then(Response => {
                    this.setState({ Search: Response.data.results })

                })
        }
    }

    handleTampil(Film) {
        console.log(Film.id)
        this.props.onSubmit(Film.id)
        this.props.close(this.state.isClick)
    }

    render() {
        return (
            <section className='container min-w-full mt-9' >
                <div className='grid grid-flow-col-dense overflow-x-scroll'>
                    {this.state.Search.map((Search, idx) => {
                        return (
                            <Card key={idx} data={Search} tampil={this.handleTampil.bind(this, Search)} />
                        )
                    })}
                </div>
            </ section>
        )
    }
}

export default SearchMovie