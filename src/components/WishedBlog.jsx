
import axios from 'axios';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
const WishedBlog = ({wishedblog}) => {
    const {_id, photo, category, blog_title, short_description, long_description, blogger}=wishedblog;
    const navigate = useNavigate()
    const handleDelete = async id => {
        try {
          const { data } = await axios.delete(
            `${import.meta.env.VITE_API_URL}/wishlist/${id}`
          )
          console.log(data)
          toast.success('Delete Successful')
          navigate(`/wishlist/${blogger.email}`)
    
        } catch (err) {
          console.log(err.message)
          toast.error(err.message)
        }
      }
    return (
        
            <div className="card shadow-xl border-2 p-2">
                <figure className='bg-base-200 h-[230px] w-[320px] mx-auto'><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                        <div className=''>
                                <div className="flex items-center gap-2"><span>{blog_title}</span></div>
                                <div className="flex items-center gap-2"><span>Category: {category}</span></div>
                                <div className="flex items-center gap-2"><span>{short_description}</span></div>
                                <div className="flex items-center gap-2"><span>{long_description}</span></div>
                        </div>       
                        <div className='flex gap-3 justify-between'>
                            <button className='btn btn-success w-5/12'><Link to={`/wishlist/${blogger.email}`} onClick={() => handleDelete(_id)}>Remove Wishlist</Link></button>
                            {/* <button
                            onClick={() => handleDelete(_id)}
                            className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'
                          >
                              Remove Wishlist
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                              />
                            </svg>
                          </button> */}
                        </div>
                </div>
            </div>
        
    );
};
WishedBlog.propTypes = {
    wishedblog: PropTypes.object.isRequired,
    }
export default WishedBlog;