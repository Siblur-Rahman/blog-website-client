import { useLoaderData } from "react-router-dom";
import Blog from "../components/Blog";

const AddedBlogs = () => {
  const blogs = useLoaderData();

  return (
    <>
          <h2 className='text-5xl text-blue-800 font-bold capitalize text-center'>My Blogs</h2>
        <div className='mt-4'>
        {
          blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
        }
    </div>
    </>
  )
}

export default AddedBlogs
//
