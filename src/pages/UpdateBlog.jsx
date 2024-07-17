import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const UpdateBlog = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const blog = useLoaderData()
  const {_id, photo, category, blog_title, short_description, long_description}=blog;
  console.log(short_description)


  const handleFormSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const blog_title = form.blog_title.value
    const email = form.email.value
    const photo = form.photo.value
    const category = form.category.value

    const short_description = form.short_description.value
    const long_description = form.long_description.value
    console.log()
    const blogData = {
      blog_title,
      photo,
      category,
      short_description,
      long_description,
      blogger: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    }
    console.log(blogData)
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/blog/${_id}`,
        blogData
      )
      console.log(data)
      toast.success('Blog Data Updated Successfully!')
      navigate(`/myblogs/${user.email}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='w-5/6 mx-auto min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Add a Blog
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='blog_title'>
                Blog Title
              </label>
              <input
                id='blog_title'
                name='blog_title'
                type='text'
                defaultValue={blog_title}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
  
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='photo'
              >
                Photo URL
              </label>
              <input
                id='photo'
                autoComplete='photo'
                name='photo'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='text'
                defaultValue={photo}
              />
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 ' htmlFor='category'>
                Category
              </label>
              <select
                name='category'
                id='category'
                defaultValue={category}
                className='border p-2 rounded-md'
              >
                <option value='Business blog'>Business blog</option>
                <option value='Food blog'>Food blog</option>
                <option value='Fashion'>Fashion</option>
              </select>
            </div>

          </div>
          {/* short Description */}
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='short_description'>
              Short Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='short_description'
              id='short_description'
              defaultValue={short_description}
            ></textarea>
          </div>
          {/* long Description */}
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='long_description'>
              Long Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='long_description'
              id='long_description'
              defaultValue={long_description}
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  )
};

export default UpdateBlog;