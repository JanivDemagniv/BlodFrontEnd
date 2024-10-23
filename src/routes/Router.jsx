import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ROUTES from './routesModule'
import Posts from '../posts/pages/Posts'
import Post from '../posts/pages/Post'
import Error from '../pages/Error'

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<Posts />} />
            <Route path={ROUTES.POSTS} element={<Posts />} />
            <Route path={ROUTES.POSTINFO + '/:id'} element={<Post />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}
