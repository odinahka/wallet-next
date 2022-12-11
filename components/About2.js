import React from 'react';

const About2 = () => {
    return (
        <div className='w-screen h-screen bg-wallet_blue bg-opacity-20'>
            <div className='mx-auto h-full container flex flex-row items-center space-x-20'>
                <div className='flex-1 flex flex-col'>
                <h3 className='uppercase'> &#x2022; Next Generations Cards</h3>
                <div className='border-l-8 border-slate-400 pl-5 py-4'>
                    <h3 className='font-bold'>Lorem ipsum dolor sit amet</h3>
                    <p className='opacity-50'>lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do elumod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                </div>
                <div className='opacity-50 border-l-4 border-slate-400 pl-5 py-4'>
                    <h2 className='font-bold'>Lorem ipsum dolor sit amet</h2>
                    <p className='opacity-50'>lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do elumod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                </div>
                <div className='opacity-50 border-l-4  border-slate-400 pl-5 py-4'>
                    <h2 className='font-bold'>Lorem ipsum dolor sit amet</h2>
                    <p className='opacity-50'>lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do elumod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                </div>
                <div className='mt-12 hover:cursor-pointer opacity-60 hover:opacity-100'>
                    <p>Get Started &#8594;</p>
                </div>

                </div>
                <div className='flex-1 flex items-center justify-center relative' >
                        <img src='assets/Physical USD Card.png' alt='card1'/>
                        <img className='absolute -left-20' src='assets/Physical USD Card2.png' alt='card1'/>
                </div>
            </div>
        </div>
    );
}

export default About2;
