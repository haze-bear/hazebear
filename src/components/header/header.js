import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
    return(
        <div className='headerContainer'>
            <Link to="home"><h1>[hazebear.com]</h1></Link>
        </div>
    )
}

export default Header;