import React, { Component } from 'react'
import axios from 'axios'
// import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { BsFillStarFill } from 'react-icons/bs'


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
            <section className='container mx-auto overflow-y-auto' >
                <div className='grid gap-6'>
                    {this.state.Search.map((Search, idx) => {
                        return (
                            // <Card key={idx} data={Search} tampil={this.handleTampil.bind(this, Search)} />
                            <Link onClick={this.handleTampil.bind(this, Search)} to='/detail' key={idx} className='flex gap-5' >
                                <img className='w-3/12 h-fit rounded-xl' src={`${process.env.REACT_APP_IMG_URL}${Search.poster_path}`} alt="" />

                                <div>
                                    <h3>{Search.title}</h3>
                                    <div className='flex items-center gap-2'>
                                        <BsFillStarFill className='text-yellow-400' />
                                        <p>{Search.vote_average}</p>
                                    </div>
                                    <p>{Search.release_date}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </ section>
        )
    }
}

export default SearchMovie