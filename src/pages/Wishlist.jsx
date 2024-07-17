import { useLoaderData } from "react-router-dom";
import WishedBlog from "../components/WishedBlog";

const Wishlist = () => {
    const wishedblogs = useLoaderData();
    return (
        <div className=''>
        {
           wishedblogs.map(wishedblog => <WishedBlog key={wishedblog._id} wishedblog={wishedblog}></WishedBlog>)
        }

    </div>
    );
};

export default Wishlist;