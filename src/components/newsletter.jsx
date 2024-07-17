import toast from "react-hot-toast";

const handleSubscribe = (e)=>{
    e.preventDefault();
    const email = e.target.email.value
    if(email){e.target.email.value= '';
    console.log(e.target.email)
    return  toast("Thank you for subscribing to our newsletter.")}
    {return toast('Enter Youer Email.')}
    
}
const Newsletter = () => {
    return (
        
        <div className=''>
            <div className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5 text-green-500 text-2xl">Please, Subscribe To Get Notification </p>
                                    <form onSubmit={handleSubscribe} className="lg:flex gap-2 mx-auto mt-5">
                                        <div className=''>
                                            <input
                                                id='LoggingEmailAddress'
                                                autoComplete='email'
                                                name='email'
                                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                                type='email'
                                                placeholder="Enter Youer Email"
                                            />
                                            </div>
                                            <div className=''>
                                                <button
                                                    type='submit'
                                                    className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                                                >
                                                    Subscribe
                                                </button>
                                            </div>
                                    </form>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;