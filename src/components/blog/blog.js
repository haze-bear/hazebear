import React from 'react'
import './blog.css'

// Turn into the class component. To FETCH on load.

function Blog(props) {
    return (
        <div className='blog'>

            <div className='blogCardTop'>
                <h2>{props.Title}</h2>
                <p>{props.DateTime}</p>
            </div>

            {/* will be replaced with graphic img */}
            <hr></hr>

            <div className='blogCardContent'>
                <div className='imgHolder100'>
                </div>
                
                <p>
                    {/* This will need to be populated from API FETCH to Medium Blog */}
                    {props.Content} 
                </p>
            </div>

        </div>
    );
};

export default Blog;