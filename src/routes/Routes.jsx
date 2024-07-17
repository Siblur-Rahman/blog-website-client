import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import ErrorPage from '../pages/ErrorPage'
import PrivateRoute from './PrivateRoute'
import BlogDetails from '../pages/BlogDetails'
import FeaturedBlogs from '../pages/FeaturedBlogs'
import UpdateBlog from '../pages/UpdateBlog'
import AddBlog from '../pages/AddBlog';
import AddedBlogs from '../pages/AddedBlogs'
import RecentBlogs from '../components/RecentBlogs'
import Wishlist from '../pages/Wishlist'
import Allblogs from '../pages/AllBlogs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader:() =>  fetch(`${import.meta.env.VITE_API_URL}/recentblogs`),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/blogdetails/:id',
        element: 
        <PrivateRoute>
          <BlogDetails />,
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`),
      },
      {
        path: '/wishlist/:email',
        element: (
          <PrivateRoute>
           <Wishlist/>,
          </PrivateRoute>
        ),
        loader:({params}) =>  fetch(`${import.meta.env.VITE_API_URL}/wishlist/${params.email}`),

      },
      {
        path: '/update/:id',
        element: <UpdateBlog />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`),
      },
      {
        path: '/addblog',
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: '/myblogs/:email',
        element: (
          <PrivateRoute>
            <AddedBlogs/>
          </PrivateRoute>
        ),
        loader:({params}) =>  fetch(`${import.meta.env.VITE_API_URL}/blogs/${params.email}`),
      },
      {
        path: '/recentblogs',
        element: <RecentBlogs/>      
      },
      {
        path: '/allblogs',
        element: (
            <Allblogs />
        ),
        loader:() =>  fetch(`${import.meta.env.VITE_API_URL}/blogs`),

      },
      {
        path: '/featuredblogs',
        element: <FeaturedBlogs />,
        loader:() =>  fetch(`${import.meta.env.VITE_API_URL}/blogs`),
      },
    ],
  },
])

export default router
