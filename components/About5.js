import React from 'react';

const About5 = () => {
    return (
        <div className='h-screen w-screen bg-wallet_black'>
            <div className='container text-white'>
                <div className='mt-10 pt-20'>
                    <h2 className='opacity-60'>
                        What our customers are saying...
                    </h2>
                    <p className='opacity-50'>
                        We serve thousands of customers and this is what people are saying about us
                    </p>
                </div>
                <div className='my-20'>
                    <div className='pl-14 text-center'>
                    <h2 className='text-white opacity-40'>
                        The Wallets payroll is seamless, the cards & sub wallets allow us to be flexible with payments and imprest to people outside of the main founding team. Hands down the Wallet team is the most responsive and customer centric team I have ever worked with. Similar to Amazon focus on the customer I see Wallets having that same outlook
                    </h2>    
                    </div>
                </div>
                <div className='flex flex-row space-x-4'>
                    <div className='h-20 w-20 bg-slate-300 opacity-60 rounded-full'/>
                    <div className='py-2'>
                        <h3>
                            Uzoma Ayogu
                        </h3>
                        <p className='opacity-50'>
                            Co-founder, Releaf (YC517)
                        </p>
                    </div>
                </div>
                <div className='flex items-stretch justify-between mt-12 lg:mt-28'>
                    <div className='flex flew-row space-x-3'>
                        <div className='h-4 w-4 rounded-full bg-white opacity-80'/>
                        <div className='h-4 w-4 rounded-full bg-white opacity-20'/>
                    </div>
                    <div className='flex flew-row space-x-3'>
                    <div className='h-8 w-8 bg-white bg-opacity-60 rounded-full text-center pt-1 hover:cursor-pointer'>&#8592;</div>
                    <div className='h-8 w-8 bg-wallet_green bg-opacity-60 rounded-full text-center pt-1 hover:cursor-pointer'>&#8594;</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About5;
