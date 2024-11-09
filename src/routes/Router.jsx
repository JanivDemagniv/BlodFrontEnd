import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ROUTES from './routesModule'
import Error from '../pages/Error'
import About from '../pages/About'
import LoginPage from '../users/pages/LoginPage'
import SignupPage from '../users/pages/SignupPage'
import Posts from '../posts/pages/Posts'
import Post from '../posts/pages/Post'
import AddPost from '../posts/pages/AddPost'
import EditPost from '../posts/pages/EditPost'
import LikedPosts from '../posts/pages/LikedPosts'
import MyPosts from '../posts/pages/MyPosts'
import UserDetails from '../users/pages/UserDetails'
import EditProfilePage from '../users/pages/EditProfilePage'
import CrmPage from '../crm/crmPage'
import PostsInsights from '../crm/components/PostsInsights'

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<Posts />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.POSTS} element={<Posts />} />
            <Route path={ROUTES.POSTINFO + '/:id'} element={<Post />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            <Route path={ROUTES.ADDPOST} element={<AddPost />} />
            <Route path={ROUTES.LIKEDPOSTS} element={<LikedPosts />} />
            <Route path={ROUTES.MYPOSTS} element={<MyPosts />} />
            <Route path={ROUTES.EDITPOST + '/:id'} element={<EditPost />} />
            <Route path={ROUTES.MYPROFILE} element={<UserDetails />} />
            <Route path={ROUTES.EDITPROFILE} element={<EditProfilePage />} />
            <Route path={ROUTES.CRM} element={<CrmPage />} />
            <Route path={ROUTES.POSTSCRM} element={<PostsInsights />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}
