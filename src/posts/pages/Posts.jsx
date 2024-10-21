import React from 'react'
import PostsComponent from '../component/PostsComponent'

export default function Posts({ posts }) {
    return (
        <div>
            {posts.map((post) => <PostsComponent post={post} key={post._id} />)}
        </div>
    )
}
