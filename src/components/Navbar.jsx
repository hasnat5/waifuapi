import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>homepage</Link ></li>
                <li><Link to={'/about'}>about</Link ></li>
            </ul>
        </div>
    )
}

export default Navbar