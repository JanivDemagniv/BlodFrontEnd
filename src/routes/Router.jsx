import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ROUTES from './routesModule'
import Error from '../pages/Error'
import About from '../pages/About'
import Posts from '../posts/component/Posts'
import Post from '../posts/component/Post'

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<Posts />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.POSTS} element={<Posts />} />
            <Route path={ROUTES.POSTINFO + '/:id'} element={<Post />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}
