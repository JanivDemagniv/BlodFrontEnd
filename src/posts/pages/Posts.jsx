import React from 'react'
import Post from '../component/Post'

export default function Posts({ posts }) {
    return (
        <div>
            {posts.map((post) => <Post post={post} />)}
        </div>
    )
}
