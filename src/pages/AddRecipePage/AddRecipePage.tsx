import React, { useRef } from 'react';

import { Button } from '@components/elements';
import {
  Input,
  InputFile,
} from '@components/form/components';

import useAddRecipePage from './addRecipePage.hook';
import { Wrapper } from '@components/layouts';

const AddRecipePage = props => {
  const {
    /* Functions */
    goBack,
    onSumbitRecipe,
    displayFileOnUpload,
  } = useAddRecipePage(props);

  return (
    <div className='p-4'>
      <Wrapper>
        <div className='mb-[22px] lg:mb-[30px] flex justify-end'>
          <Button
            onClick={goBack}
          >
            Back
          </Button>
        </div>
        <form onSubmit={onSumbitRecipe}>
          <div className='lg:flex'>
            <div className='lg:flex-1 lg:mr-1'>
              <Input
                className='mb-[15px]'
                placeholder="Title"
                name="name"
              />
              <textarea
                className={`
                  h-[200px] bg-[#E9E9E9] text-[15px] px-4 rounded-sm
                  w-full focus:outline focus:outline-[#DAC3FF] focus:outline-[3px]
                  mb-[10px] p-2
                `}
                placeholder="Description"
                name="description"
              ></textarea>
            </div>
            <div className='lg:flex-1 lg:ml-1'>
              <img id='recipe-thumbnail' className='w-full hidden' />
              <InputFile
                className='mb-[15px]'
                label="Upload Thumbnail"
                name='recipe-thumbnail'
                accept="image/*"
                onChange={displayFileOnUpload}
              />
              <video id='recipe-video' className='w-full hidden' controls></video>
              <InputFile
                className='mb-[15px]'
                label="Upload Video"
                name='recipe-video'
                accept="video/*,.mkv"
                onChange={displayFileOnUpload}
              />
            </div>
          </div>
          <Button
            className='w-[100%] lg:mt-[30px]'
            type="submit"
          >
            Save
          </Button>
        </form>
      </Wrapper>
    </div>
  );
}

export default AddRecipePage;