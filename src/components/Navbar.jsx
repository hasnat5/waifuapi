import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Turn as Hamburger } from 'hamburger-react'
import SearchMobile from '../pages/SearchMobile'
import Logo from '../assets/logo.webp'

const Navbar = (props) => {
    const [isClick, setClick] = useState(false)
    // const [isOpen, setOpen] = useState(false)
    const handleChange = () => {
        return setClick(!isClick);
    };

    let handleClose = (data) => {
        return setClick(data);
    }

    const getData = (data) => {
        console.log(data)
        props.onSubmit(data)
    }

    return (
        <div className="navbar relative bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        {/* <Hamburger toggled={isOpen} toggle={setOpen} size={24} /> */}
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li><Link to={'/'}>homepage</Link ></li>
                        <li><Link to={'/genre'}>genre</Link ></li>
                        <li><Link to={'/about'}>about</Link ></li>

                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                    <span><img className='h-6 w-6 mr-1' src={Logo} alt="logo-web" /></span>
                    Myfilmlist
                </Link>
            </div>
            <div className="navbar-end">
                {isClick && <SearchMobile liftData={getData} close={handleClose} />}
                <button onClick={() => handleChange()} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>


        </div >

    )
}

export default Navbar