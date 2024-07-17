import PropTypes from 'prop-types';

import Blog from "../components/Blog";
import { useLoaderData } from 'react-router-dom';

const Allblogs = () => {
  const blogs = useLoaderData()
  

    return (
        <>
            {
                blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
            }
        </>
    );
};
Allblogs.propTypes = {
    blogs: PropTypes.object.isRequired,
    }

export default Allblogs;