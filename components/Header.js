import React from 'react';
import {ChevronDownIcon} from '@heroicons/react/outline'

const Header = () => {
    return (
        <header className='bg-wallet_black w-full h-16 drop-shadow-lg rounded-sd'>
            <div className='container px-4 md:px-0 h-full mx-auto flex justify-between items-center'>
                <div className='grid grid-flow-row'>
                    <h3 className='text-wallet_green text-2xl md:text-3xl font-bold italic mb-0'>Wallet</h3> 
                    <div className='flex justify-end items-end text-white'><p className=''>.africa</p>  </div> 
                </div>
                <ul className='hidden sm:flex relative  top-0 right-0 p-0 flex-row space-x-6 mr-4 mt-3'>
                    <li>
                        <a href='#' className='text-white opacity-70 hover:opacity-100 hover:bg-wallet_green hover:rounded-md hover:cursor-pointer duration-300 p-1'>Why us</a>
                    </li>
                    <li>
                        <a href='#' className='text-white opacity-70 hover:opacity-100 hover:bg-wallet_green hover:rounded-md hover:cursor-pointer duration-300 p-1'>Products &#8964;</a>
                    </li>
                    <li>
                        <a href='#' className='text-white opacity-70 hover:opacity-100 hover:bg-wallet_green hover:rounded-md hover:cursor-pointer duration-300 p-1'>About</a>
                    </li>
                    <li>
                        <a href='#' className='text-white opacity-70 hover:opacity-100 hover:bg-wallet_green hover:rounded-md hover:cursor-pointer duration-300 p-1'>Pricing</a>
                    </li>
                </ul>
                <div className='bg-wallet_green rounded-sm hover:cursor-pointer'>
                    <button className='text-white px-4 py-3 sm:px-8 sm:py-4'>Login</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
