import React, { Component } from 'react';
import { Outlet, Route, Routes } from "react-router-dom";
import './App.css';

// Components
import Home from './components/home/home';
import Projects from './components/projects/projects';
import About from './components/about/about';
import Art from './components/art/art';

import Header from './components/header/header'
import AsideBlock from './components/asideBlock/asideBlock'
import Nav from './components/navigation/navigation'
import Stats from './components/stats/stats'

class App extends Component {

  render() {
    return (
    <div className="app">
      {/* If using React Router may need to refactor the CONTAINER into a BASE Component to act as a home screen. Need to figure out what will stay static on the site and what will be fluent. */}
      <div className='container'>
        {/* 
        Header of the Site.
        Mainly a static image with a redirect to the home page.
        Maybe an ester egg too.
        Marquee?
      */}

        <Header />
        
        {/* <Outlet /> */}

        <Routes>
          <Route index path='/home' element={<Home />}/>
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/art' element={<Art />} />
        </Routes>

        {/* 
        Aside RIGHT - Contains Navigation, Site Stats, And other links 
        3 Blocks Different Height
        */}
        <div className='aside'>

          <Nav></Nav>

          <AsideBlock></AsideBlock>

          <Stats></Stats>

        </div>

      </div>
    </div>
    );
  }
};

export default App;
