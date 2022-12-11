import React from 'react';

const About3Content = ({title, description, id}) => {
    return (
        <div className={`flex flex-col ${id===0 && 'md:col-span-2 md:col-start-1 md:col-end-2'} space-y-3`}>
            <div className='h-8 w-8 bg-[#764824]'/>
            <h3>{title}</h3>
            <p className='opacity-60'>{description}</p>
        </div>
    );
}

export default About3Content;
