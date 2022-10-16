import React from 'react';

const Pagination = props => {
  const {
    meta,
    onPrev,
    onNext,
  } = props;

  return (
    <div className='flex w-fit'>
      <button
        className='h-[40px] w-[40px] flex justify-center items-center rounded-full shadow-sm shadow-black hover:bg-[#E9E9E9]'
        onClick={() => onPrev({
          offset: meta?.prevOffset || 0,
          limit: meta?.limit || 0,
        })}
      >
        <img
          className='scale-75'
          src="https://img.icons8.com/external-outline-astudio/32/ac80f3/external-arrow-arrow-outline-astudio-10.png"
        />
      </button>
      <button
        className='ml-2 h-[40px] w-[40px] flex justify-center items-center rounded-full shadow-sm shadow-black hover:bg-[#E9E9E9]'
        onClick={() => onNext({
          offset: meta?.nextOffset || 0,
          limit: meta?.limit || 0,
        })}
      >
        <img
          className='scale-75'
          src="https://img.icons8.com/external-outline-astudio/32/ac80f3/external-arrow-arrow-outline-astudio-25.png"
        />
      </button>
    </div>
  );
}

export default Pagination;