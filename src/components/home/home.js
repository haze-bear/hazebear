import React, { Component } from 'react'

import Blog from '../blog/blog';
import MainBlock from '../mainBlock/mainBlock';
import Footer from '../footer/footer';
import Skills from '../skills/skills';


class Home extends Component {
    render() {
        return (
            <div className="main">
                {/* 
                Main Article Of The Site.
                This is where block movement will be done.
                Routing will be handled through here.
                */}
                <MainBlock></MainBlock>

                {/* Skills and Proficiencies in languages, software and other tech skills
                Look into pulling Codewars scores etc, any other code minigames?
                */}
                <Skills></Skills>

                {/* Blog will need container creating to populate with API requests. using <Blog/> as a child. */}
                <Blog Title="A Blog Post" DateTime="Mon 12 Feb 08:35am" Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero nunc, aliquet id tortor quis, pellentesque cursus metus. Phasellus ex neque, porta sit amet facilisis non, viverra quis tellus. Duis quis justo et nisi fringilla venenatis nec ut purus. Nam eleifend diam sed velit aliquet sollicitudin. In quis molestie sapien. Curabitur non metus vel mi rutrum bibendum nec sit amet turpis. Nullam ligula ante, maximus eu lacus quis, ultricies volutpat enim. Nam pellentesque elit quis cursus laoreet. Ut elementum et urna eu viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero nunc, aliquet id tortor quis, pellentesque cursus metus. Phasellus ex neque, porta sit amet facilisis non, viverra quis tellus. Duis quis justo et nisi fringilla venenatis nec ut purus. Nam eleifend diam sed velit aliquet sollicitudin. In quis molestie sapien. Curabitur non metus vel mi rutrum bibendum nec sit amet turpis. Nullam ligula ante, maximus eu lacus quis, ultricies volutpat enim. Nam pellentesque elit quis cursus laoreet. Ut elementum et urna eu viverra." />

                <Footer></Footer>
            </div>
        );
    }
}

export default Home;