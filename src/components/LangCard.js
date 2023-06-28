import React, { useState } from 'react';

const LangCard = ({language, imageSrc}) => {  
    return (
        <div className=' m-2  flex flex-row items-center justify-between w-40'>
            <div>
                <img class=" object-cover h-[30px]" src={imageSrc} alt="" />
            </div>
            <div className='w-1/2 justify-start'>
                <h5 className='text-md text-slate-400'>{language}</h5>
            </div>
        </div>
    );
}

export default LangCard;