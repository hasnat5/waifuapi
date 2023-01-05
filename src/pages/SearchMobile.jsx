import React, { useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import SearchMovie from './SearchMovie'

const SearchMobile = (props) => {
    const [isClick] = useState(false)
    const [isTitle, setTitle] = useState('')

    const handleChange = () => {
        props.close(isClick)
    };

    const handleSearch = (title) => {
        setTitle(title)
    }

    let getData = (data) => {
        console.log(data)
        props.liftData(data)
    }

    return (
        <div className='fixed grid gap-4 pt-4 px-3 content-start top-0 left-0 bg-primary w-screen h-screen'>
            <div className='flex'>
                <button onClick={() => handleChange()}>
                    <IoArrowBack className='text-secondary text-2xl mr-3' />
                </button>
                <input autoFocus onChange={({ target }) => handleSearch(target.value)} type="text" placeholder="Fight Club" className="text-secondary font-poppins justify-self-center input input-bordered input-md outline-secondary rounded-md w-full max-w-sm" />

            </div>
            <SearchMovie title={isTitle} close={handleChange} onSubmit={getData} />
        </div>
    )
}

export default SearchMobile