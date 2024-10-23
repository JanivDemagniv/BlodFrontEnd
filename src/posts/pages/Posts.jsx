import React from 'react'
import PostsComponent from '../component/PostsComponent'
import postsMock from '../mockData'

let posts = postsMock;

export default function Posts() {

    return (
        <div>
            {posts.map((post) => <PostsComponent post={post} key={post._id} />)}
        </div>
    )
}
