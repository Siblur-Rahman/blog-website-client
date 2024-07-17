import { useContext } from "react";
import { Link, useLoaderData} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const BlogDetails = () => {
  const { user } = useContext(AuthContext)
  const blog = useLoaderData();
  const {_id, photo, category, blog_title, short_description, long_description, blogger}=blog;
  const ownerEmail = blogger.email; 
  console.log(ownerEmail)
  return (
        <>
              <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold">{blog_title}</h1>
                  <h1 className="text-5xl font-bold">{category}</h1>
                  <p className="py-6">{short_description}</p>
                  <p className="py-6">{long_description}</p>
                  {user.email==ownerEmail &&
                    <button className='btn btn-secondary mr-3 w-full' ><Link to={`/update/${_id}`}>Update</Link></button>
                  }
                </div>
              </div>
            </div>
        </>
  );
};

export default BlogDetails;