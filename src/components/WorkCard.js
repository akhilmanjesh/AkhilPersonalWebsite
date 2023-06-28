import React, { useState } from 'react';

const WorkCard = ({title, imageSrc, content, redir, visit}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='bg-[#1B1C21] max-w-sm border-gray-700 rounded-lg flex flex-col items-center justify-between hover:cursor-pointer relative'
         onMouseEnter={() => setIsHovered(true)} 
         onMouseLeave={() => setIsHovered(false)}>
      <img class=" object-cover h-24 rounded-full  pt-2 w-" src={imageSrc} alt="" />
      <div className='p-5 w-full'>
          <h5 className='mb-2 text-lg font-bold text-white'>{title}</h5>
          {visit && (
            <div className='flex flex-row justify-between'>
                <a target="_blank" href={redir} rel="noopener noreferrer" className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border border-[#1DBF85] rounded-lg'>
                    Visit Project
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
          )}
      </div>
      {isHovered && (
        <div className='absolute top-full w-full bg-white text-black p-4 rounded-lg z-50'>
            <ul className=''>
              {content.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
      )}
    </div>
  );
}

export default WorkCard;
