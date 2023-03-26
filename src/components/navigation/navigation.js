import React from 'react'
import './navigation.css'

import NavItem from './navItem.js'

function Nav() {
    return (
        <div className='nav'>
            <p className='navTitle'>[navigation]</p>
            <NavItem name="link 1"></NavItem>
            <NavItem name="link 2"></NavItem>
            <NavItem name="link 3"></NavItem>
            <NavItem name="link 4"></NavItem>
            <NavItem name="link 5"></NavItem>
            <NavItem name="link 6"></NavItem>
        </div>
    );
};

export default Nav