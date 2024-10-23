import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ROUTES from './routesModule'
import Posts from '../pages/Posts'
import Post from '../pages/Post'
import Error from '../pages/Error'
import About from '../pages/About'

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
