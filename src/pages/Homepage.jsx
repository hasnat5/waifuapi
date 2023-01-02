import React, { Component } from 'react'
import Discover from './Discover'
import jumbotron from '../assets/backdrop.jpg'
import Trending from './Trending'
import SearchMovie from './SearchMovie'
// import DetailMovie from './DetailMovie'

// api key
// 0b78155e665ea8730d66deee9862df88

// api read
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjc4MTU1ZTY2NWVhODczMGQ2N;mRlZWU5ODYyZGY4OCIsInN1YiI6IjYzYTZhMjFkMmZhZjRkMDBiMWU3ZGYzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hDlKyUS3pQuQuPi3laa_ohjnHb83nBIgQySF_bWQ3jU

// use example
// https://api.themoviedb.org/3/movie/550?api_key=0b78155e665ea8730d66deee9862df88

export default class Homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Title: []
        }
    }

    getData = (data) => {
        console.log(data)
        this.props.onSubmit(data)
    }

    handleSearch(title) {
        console.log(this.state.Title);
        this.setState({ Title: title })
    }


    render() {
        return (
            <main onSubmit={this.getData} className='container bg-white mx-auto'>
                <section className='bg-cover h-36 grid mb-8' style={{ backgroundImage: `url(${jumbotron})` }}>
                    <input onChange={({ target }) => this.handleSearch(target.value)} type="text" placeholder="Search movie" className="font-poppins justify-self-center mt-28 input input-bordered input-md w-full max-w-xs" />
                </section>

                <section className=''>
                    <h2 className='font-poppins px-4 mb-4'>Result Search</h2>
                    <SearchMovie title={this.state.Title} onSubmit={this.getData} />
                </section>

                <section className='mb-5'>
                    <h2 className='font-poppins px-4 mb-4'>Discover</h2>
                    <Discover onSubmit={this.getData} />
                </section>

                <section className=''>
                    <h2 className='font-poppins px-4 mb-4'>Trending</h2>
                    <Trending onSubmit={this.getData} />
                </section>



            </main>
        )
    }
}
