import React from 'react'
import PostComponent from '../component/PostComponent'

export default function Posts({ posts }) {
    return (
        <div>
            {posts.map((post) => <PostComponent post={post} key={post._id} />)}
        </div>
    )
}
