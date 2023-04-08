import React from 'react';
import Navigation from './Navigation';

function Post() {
    return (
        <div className='postContainer'>
            <div className='navigation-section'>
                <Navigation />
            </div>
            
            <h1 className='post'>Post</h1>
            <form>
                <label className='postLabel'>Pic</label>
                <input className='file' type='file' />
<br />
                <textarea placeholder='Type your heart out' />

                <button className='postButton newButton' type='submit'>Post</button>
            </form>
        </div>
    )
}

export default Post;