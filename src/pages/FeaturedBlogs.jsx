import { useEffect, useState } from "react";
import Blog from "../components/Blog";
import axios from "axios";
import Featuredtr from "../components/Featuredtr";


const FeaturedBlogs = () => {
    const [topBlogs, setTopBlogs] = useState([]);



    useEffect(()=>{
        const getTopBlogs = async ()=>{
          const { data } = await axios(`${import.meta.env.VITE_API_URL}/blogs`);
          // Function to count words in a string
            function wordCount(str) {
                return str.split(/\s+/).filter(word => word.length > 0).length;
            }
            
            // Function to sort objects by word count in a specific property and select top Number objects
            function gettop10Blogs(array, property, topNumber) {
                return array
                .slice() 
                .sort((a, b) => wordCount(b[property]) - wordCount(a[property])) // Sort in descending order
                .slice(0, topNumber);
            }
            
            // Example usage: getting the top 10 blogs by the word count of the 'description' property
            const top10Blogs = gettop10Blogs(data, 'long_description', 10);

          setTopBlogs(top10Blogs);
        }
      getTopBlogs()
    }, [])
    return (
        <div >
           <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Serial no.</th>
                        <th>Name</th>
                        <th>Owner</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        topBlogs.map((blog, index )=><Featuredtr key={index} index={index} blog={blog}></Featuredtr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeaturedBlogs;
