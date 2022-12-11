import React from 'react';

const Blog = () => {
    return (
        <div className='container h-screen mx-auto flex flex-col'>
            <div className='mt-20 flex-1'>
                <h3>
                    Our Blog
                </h3>
                <div className='flex flex-row items-stretch justify-between'>
                 <p>
                    Checkout post on what we have been up to...
                </p>   
                <p className='text-sm md:text-lg hover:cursor-pointer text-wallet_purple'>
                    View all posts
                </p>
                </div>

            </div>
            <div className='w-full flex flex-row flex-4 space-x-5'>
            <div className='flex-1 bg-wallet_green opacity-10 rounded-md'/>
            <div className='flex-1 flex flex-col space-y-8'>
                <div className='flex-1 bg-wallet_green opacity-10 rounded-md'/>
                <div className='flex-1 bg-wallet_green opacity-10 rounded-md'/>
            </div>
            </div>
            <div className='flex-1'/>
        </div>
    );
}

export default Blog;
