import React, { Component } from 'react'
import './App.css';

// Components
import Header from './components/header/header'
import AsideBlock from './components/asideBlock/asideBlock'
import Blog from './components/blog/blog'
import MainBlock from './components/mainBlock/mainBlock'
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
        {/* 
        Main Article Of The Site.
        This is where block movement will be done.
        Routing will be handled through here.
         */}
        <div className='main'>
          <MainBlock></MainBlock>

          {/* BLog will need container creating to populate with API requests. using <Blog/> as a child. */}
          <Blog Title="A Blog Post" DateTime="Mon 12 Feb 08:35am" Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero nunc, aliquet id tortor quis, pellentesque cursus metus. Phasellus ex neque, porta sit amet facilisis non, viverra quis tellus. Duis quis justo et nisi fringilla venenatis nec ut purus. Nam eleifend diam sed velit aliquet sollicitudin. In quis molestie sapien. Curabitur non metus vel mi rutrum bibendum nec sit amet turpis. Nullam ligula ante, maximus eu lacus quis, ultricies volutpat enim. Nam pellentesque elit quis cursus laoreet. Ut elementum et urna eu viverra." />
        </div>

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
