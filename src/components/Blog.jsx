
import PropTypes from 'prop-types';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
const Blog = ({blog}) => {
    const {_id, photo, category, blog_title, short_description, long_description}=blog;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleWishButton = async () => {
      if(!user){
        return navigate('/login')
      }
        const email = user.email

        const wishlistData = {
          blog_title,
          photo,
          category,
          short_description,
          long_description,
        //   date,
          blogger: {
            email,
            name: user?.displayName,
            photo: user?.photoURL,
          },
        }
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/wishlist`,
            wishlistData
          )
          console.log(data)
          toast.success('Added to wishlist Successfully!')
          navigate(`/wishlist/${email}`)
        } catch (err) {
          navigate('/login')
          console.log(err)
        }
      }
    return (
        
            <div className="card shadow-xl border-2 p-2 mt-4">
                <figure className='bg-base-200 h-[230px] w-[320px] mx-auto'><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                        <div className=''>
                                <div className="text-center text-3xl">{blog_title}</div>
                                <div className="text-2xl"><span className='bg-yellow-100 rounded-lg p-1'>{category}</span></div>
                                <div className=""><span className='text-xl'>{short_description}</span></div>
                                <div className="mt-2"><span>{long_description}</span></div>
                        </div>       
                        <div className='flex gap-3 justify-between'>
                            <button className='btn btn-secondary w-5/12'><Link to={`/blogdetails/${_id}`}>Details</Link></button>
                            <button className='btn btn-success w-5/12' onClick={()=>handleWishButton()}>Wishlist</button>
                        </div>
                </div>
            </div>
        
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    }
export default Blog;