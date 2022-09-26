import React from 'react';

 import { Button } from '@components/elements';

const Recipe = props => {

  return (
    <div className='w-[300px] shadow-sm shadow-black mb-[15px]'>
      <div className='border border-[#AC80F3]'>
        <video>
          <source src="" type="video/mp4" />
        </video>
      </div>
      <div className='p-[15px]'>
        <p className='text-[18px] pb-2 text-center font-bold'>Recipe Title</p>
        <p className='text-[14px] pb-2 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam
        </p>
        <div className='flex flex-nowrap justify-between items-center'>
          <Button className='text-[10px] h-[25px] w-[105px]'>
            Download
          </Button>
          <Button className='text-[10px] h-[25px] w-[105px] bg-[#ffffff] text-[#AC80F3] border border-[#AC80F3]'>
            Favorite
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Recipe;