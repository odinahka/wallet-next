import React from 'react';
import { SocialIcon } from 'react-social-icons';
import apple from './svg/apple.svg';
import store from './svg/playstore.svg';

const Footer = () => {
    return (
        <div className='h-screen w-screen flex flex-col'>
            <div className='bg-white flex-1'/>
            <div className='bg-wallet_black flex-4 flex items-start justify-center full'>
            <div className='h-96 container -mt-60'>
            <div className='h-full w-full bg-gradient-to-r from-wallet_green to-wallet_purple rounded-md flex space-x-5'>
                <div className='m-3 text-white flex flex-col justify-evenly'>
                    <h3>
                        Access to positive banking at your fingertips.
                    </h3>
                    <p className='text-sm lg:text-base xl:text-lg'>Next generation financial services right in your pocket.</p>
                    <p className='text-sm lg:text-base xl:text-lg'>Download Wallets Africa on all platforms now.</p>
                    <div className='my-3 flex space-x-2 '>
                    <div className='bg-white p-3 rounded-md hover:cursor-pointer' ><img src={apple} className='bg-wallet_green h-8 w-8 rounded-full object-contain' alt='apple'/></div>
                    <div className='bg-white p-3 rounded-md hover:cursor-pointer'><img src={store} className='bg-wallet_green h-8 w-8 rounded-full object-contain' alt='apple'/></div>

                    </div>
                </div>
                <div className='flex-1 relative'>
                    <img src='assets/iPhone 12 Pro.png' alt='iPhone' className='h-96'/>
                    <img src='assets/Place Your Design Here.png' alt='iPhone' className='h-96 absolute -mt-96'/>
                </div>
            </div>
            <div className='flex flex-row mt-40 space-x-2 sm:space-x-32'>
                <div>
                    <h4 className='text-wallet_green text-2xl md:text-3xl font-bold italic mb-0'>Wallet</h4> 
                    <div className='flex justify-end items-end text-white'><p className=''>.africa</p>  </div> 
                </div>
                <div className='flex flex-row space-x-2 sm:space-x-8 text-white'>
                <div className=''>
                    <h3>About us</h3>
                    <ul className='opacity-50 hover:cursor-pointer'>
                        <li>
                            Company
                        </li>
                        <li>
                            FAQs
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Blog
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Products</h3>
                    <ul className='opacity-50 hover:cursor-pointer'>
                        <li>
                            For Customers
                        </li>
                        <li>
                            For Business
                        </li>
                        <li>
                            Forevelopers
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Legal</h3>
                    <ul className='opacity-50 hover:cursor-pointer'>
                        <li>
                            Privacy Policy
                        </li>
                        <li>
                            Terms of Service
                        </li>
                        <li>
                            Know Your Customer
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Contact us</h3>
                    <ul className='opacity-50 hover:cursor-pointer'>
                        <li>
                            Join our telegram Community
                        </li>
                        <li>
                            Hello
                        </li>
                        <li>
                            Press
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div className='text-white mt-28 flex items-stretch justify-between'>
                <p className='opacity-20'>&#169; Enterprise Wallet Payments Limited</p>
                <div>
                  <SocialIcon url='https://twitter.com' fgColor='white' bgColor='transparent'/>  
                  <SocialIcon url='https://instagram.com' fgColor='white' bgColor='transparent'/>
                </div>
            </div>
            </div>

            </div>
        </div>
    );
}

export default Footer;
