import React from 'react'



function App(){

    const title = 'Blog Post'
    const body = 'This is my Post'
    const comments = [
        {id: 1, text: 'Comments One'},
        {id:2, text:'Comment Two'}
    ]
    const loading = false
    const showComments = true
    const commentBlock = (
        <div className = "comments">
            <h2>Comments ({comments.length})</h2>
            <ul>
                {comments.map((comment) =>(
                    <li key = {comment.id}>{comment.text}</li>
                ))}
            </ul>
        </div>
    )
    if(loading) return <h2>Loading ........</h2>

    return (
        <>
        <div className = 'container'></div>
        <h1>
            {title}
        </h1>
        <p>
            {body}
        </p>

        {showComments && commentBlock}
        </>
    )
}

export default App