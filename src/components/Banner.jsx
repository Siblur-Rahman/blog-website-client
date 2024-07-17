import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/yX82hv9/banner.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5 text-green-700 text-2xl">Scroll Down To Watch Blogs</p>
                    <button className="btn btn-primary">
                        <Link
                        to='/register'
                        className='text-xs uppercase  hover:underline'
                        >
                        Register
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
//