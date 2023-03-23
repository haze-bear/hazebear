import React, { Component } from 'react'
import './navItem.css'

import bullet from '../../img/bullettemp.gif'

function NavItem(props) {
    return (
        <div className='NavItem'>
            <img src={bullet} />
            <p>{props.name}</p>
        </div>
    )
}

export default NavItem;