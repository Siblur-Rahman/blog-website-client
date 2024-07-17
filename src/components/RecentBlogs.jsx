import PropTypes from 'prop-types';

import Blog from "./Blog";
import axios from 'axios';
import { useEffect, useState } from 'react';

const RecentBlogs = () => {
  const [recentblogs, setRecentBlogs] = useState([])
    useEffect(()=>{
        const getRecentBlogs = async ()=>{
          const { data } = await axios(`${import.meta.env.VITE_API_URL}/recentblogs`)
        setRecentBlogs(data)
        }
      getRecentBlogs()
      }, [])
    return (
        <div className=''>
            {
                recentblogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
            }
        </div>
    );
};
RecentBlogs.propTypes = {
    blogs: PropTypes.object.isRequired,
    }
export default RecentBlogs;