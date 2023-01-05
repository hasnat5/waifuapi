import React, { Component } from 'react'
import axios from 'axios'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export class DetailMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Detail: [],
            Genres: [],
            Cast: []

        }

    }

    componentDidMount() {
        //get detail movie
        // console.log(this.props.data);
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${this.props.data}`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        })
            .then(Response => {
                console.log(Response.data)
                this.setState({ Detail: Response.data })
                this.setState({ Genres: Response.data.genres })
            })

        //GET CAST
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${this.props.data}/credits`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        })
            .then(Response => {
                console.log(Response.data.cast)
                this.setState({ Cast: Response.data.cast })
            })


        //get video trailer
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${this.props.data}/videos`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        })
            .then(Response => {
                console.log(Response.data)
                // this.setState({ Detail: Response.data })
            })
    }

    componentDidUpdate(pP) {
        if (pP.data !== this.props.data) {
            axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${this.props.data}`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_KEY
                }
            })
                .then(Response => {
                    console.log(Response.data)
                    this.setState({ Detail: Response.data })
                    this.setState({ Genres: Response.data.genres })
                })

            //GET CAST
            axios.get(`${process.env.REACT_APP_BASE_URL}/movie/${this.props.data}/credits`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_KEY
                }
            })
                .then(Response => {
                    console.log(Response.data.cast)
                    this.setState({ Cast: Response.data.cast })
                })
        }
    }

    render() {
        return (
            <section className='container mx-auto' >

                <article className='px-4 py-6 bg-cover bg-center' style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${process.env.REACT_APP_IMG_URL}${this.state.Detail.backdrop_path})` }}>
                    <div className='grid gap-4'>
                        <div className='justify-self-end'>
                            <a href={this.state.Detail.homepage} target='_blank' rel="noopener noreferrer" className='bg-white rounded-full p-1 inline-block'>
                                <GlobeAltIcon className='h-6 w-6' />
                            </a>
                        </div>

                        <img className='w-10/12 rounded-2xl justify-self-center' src={`${process.env.REACT_APP_IMG_URL}${this.state.Detail.poster_path}`} alt="poster-img" />

                        <h1 className='text-white'>{this.state.Detail.title}</h1>

                        {/* Genres */}
                        <div className='flex flex-wrap gap-2'>
                            {this.state.Genres.map((Genres, idx) => {
                                return (
                                    <span key={idx} className="badge font-poppins">{Genres.name}</span>
                                )
                            })}
                        </div>

                        {/* RELEASE DATE AND DURATION */}
                        <div>
                            <p className='text-white'>Release date: {this.state.Detail.release_date}</p>
                            <p className='text-white'>Duration : {this.state.Detail.runtime} min</p>
                        </div>

                        {/* SYNOPSIS */}
                        <p className='text-white'>{this.state.Detail.overview}</p>
                    </div>
                </article>

                <article className='bg-primary px-4 py-6'>
                    <h1 className='mb-6'>Cast</h1>

                    {/* CAST */}
                    <div className='grid gap-8 px-4'>
                        {this.state.Cast.slice(0, 6).map((Cast, idx) => {
                            return (
                                <div key={idx} className='flex gap-6 justify-items-center'>
                                    <div className='h-16 w-16 bg-cover bg-center rounded-full' style={{ backgroundImage: `url(${process.env.REACT_APP_IMG_URL}${Cast.profile_path}` }}>
                                    </div>
                                    <div className='self-center'>
                                        <p className='text-quaternary'>{Cast.character}</p>
                                        <h3 className='font-bold'>{Cast.name}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </article>

            </section >
        )
    }
}

export default DetailMovie