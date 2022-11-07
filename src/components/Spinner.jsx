import React from 'react';

const Spinner = () => {
   return (
      <div className='relative flex items-center justify-center w-24 h-12 my-8 mx-auto'>
         <p className='absolute font-medium text-lg animate-pulse z-10 uppercase'>
            loading
         </p>
         <div className='absolute z-0 w-12 h-12 border-2 flex items-center justify-center animate-spin-fast border-t-neutral-500 border-r-neutral-500 border-b-transparent border-l-transparent rounded-full' />
         <div className='absolute z-0 w-10 h-10 border-2 flex items-center justify-center animate-spin-reverse-fast border-b-neutral-500 border-l-neutral-500 border-t-transparent border-r-transparent rounded-full' />
      </div>
   );
};

export default Spinner;
