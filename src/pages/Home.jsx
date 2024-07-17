import Banner from "../components/Banner"
import Newsletter from "../components/newsletter"
import RecentBlogs from "../components/RecentBlogs";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    const getBlogs = async ()=>{
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/blogs`)
    setBlogs(data)
    }
  getBlogs()
  }, [])
  return (
    <div>
      <Banner/>
      <RecentBlogs blogs={blogs}/>
      <Newsletter/>
    </div>
  )
}

export default Home
