import React from 'react'

function Post() {
    return (
        <div className='postContainer'>
            <h1 className='post'>Post</h1>
            <form>
                <label className='postLabel'>Pic</label>
                <input className='file' type='file' />
<br />
                <textarea className='postInput' placeholder='Type your heart out' />

                <button className='postButton' type='submit'>Post</button>
            </form>
        </div>
    )
}

export default Post;