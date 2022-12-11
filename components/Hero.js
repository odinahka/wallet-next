import React from 'react';

const Hero = () => {
    return (
        <div className='bg-wallet_black min-w-full'>
            <div className=' relative flex flex-row container py-2 mx-auto items-center justify-center'>
            <div className='flex-1 flex-row text-white'>
                <h1 className='tracking-[12px]'>***</h1>
                <h1 className=''>One digital wallet,</h1>
                <h1 className=''>Multi Currency Cards...</h1>
                <p>Buy airtime, pay bills, perform money transfers and make seamless payments everywhere from your digital wallet and with our magic VISA cards</p>
                <div className='flex flex-row items-start mt-3 space-x-4'>
                    <button className='text-white bg-wallet_blue p-4 rounded-md'>Get Started</button>
                    <div className='bg-white p-3 rounded-md hover:cursor-pointer' ><img src='apple.svg' className='bg-wallet_green h-6 w-8 sm:h-8 rounded-full object-contain' alt='apple'/></div>
                    <div className='bg-white p-3 rounded-md hover:cursor-pointer'><img src='playstore.svg'className='bg-wallet_green h-6 w-8 sm:h-8 rounded-full object-contain' alt='apple'/></div>
                </div>
            </div>
            <div className='relative flex-1'>
                <img className='absolute left-3' src='assets/Rectangle 961card.png' alt='hang_image'/>
                <img src='assets/hand_01.png' alt='hang_image'/>
            </div>
            <button className='absolute text-white bottom-8 right-2 lg:left-4 p-2 ring-4 ring-wallet_green opacity-60 rounded-md hover:opacity-100'>How it works &#x2F2;</button>
            </div>
        </div>
    );
}

export default Hero;
