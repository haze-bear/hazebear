import React from 'react'
import { Outlet, Link } from "react-router-dom";

import './navItem.css'

import bullet from '../../img/bullettemp.png'

function NavItem(props) {
    return (
        <div className='NavItem'>
            <img src={bullet} />
            <p><Link to={props.linkD}>{props.name}</Link></p>
        </div>
    )
}

export default NavItem;