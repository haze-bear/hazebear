import React from 'react'

import './navigation.css'

import NavItem from './navItem.js'

function Nav() {
    return (
        <div className='nav'>
            <p className='navTitle'>[navigation]</p>
            <NavItem linkD="home" name="home"></NavItem>
            <NavItem linkD="about" name="about"></NavItem>
            <NavItem linkD="projects" name="projects"></NavItem>
            <NavItem linkD="art" name="art"></NavItem>
            <NavItem name="link 5"></NavItem>
            <NavItem name="link 6"></NavItem>
        </div>
    );
};

export default Nav