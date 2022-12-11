import React from 'react';
import About3Content from './About3Content';

const about3Con = [{title: 'Flexible Wallet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temper', }, {title: 'Virtual & Physical Cards', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temper', }, {title: 'Virtual Account Numbers', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temper', }];

const About3 = () => {
    return (
        <div className='w-screen h-screen bg-wallet_purple text-white'>
            <div className='container h-full mx-auto flex flex-row items-center'>
                <div className='flex-4 flex flex-col justify-evenly'>
                    <h2>Smart banking with transparent and cheaper fees...</h2>
                    <div className='grid grid-rows-1 md:grid-cols-2 space-y-4'>
                        {about3Con.map(({title, description},i ) => { return <About3Content id={i} key={i} title={title} description = {description}/>})}
                    </div>
                </div>
                <div className='flex-3'>
                    <img src='assets/Girl 1.png' alt='girl'/>
                </div>
            </div>
        </div>
    );
}

export default About3;
