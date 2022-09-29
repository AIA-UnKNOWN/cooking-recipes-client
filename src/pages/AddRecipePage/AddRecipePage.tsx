import React from 'react';

import { Button } from '@components/elements';
import { Input } from '@components/form/components';

const AddRecipePage = props => {
  return (
    <div className='p-4'>
      <div className='mb-[22px] flex justify-end'>
        <Button
          onClick={() => console.log('back to recipes list')}
        >
          Back
        </Button>
      </div>
      <form>
        <Input
          className='mb-[15px]'
          placeholder="Title"
          name="recipe-title"
        />
        <textarea
          className={`
            h-[200px] bg-[#E9E9E9] text-[15px] px-4 rounded-sm
            w-full focus:outline focus:outline-[#DAC3FF] focus:outline-[3px]
            mb-[10px]
          `}
          placeholder="Description"
          name="recipe-description"
        ></textarea>
        <Input
          className='mb-[15px]'
          type="file"
          name="recipe-thumbnail"
        />
        <Input
          className='mb-[15px]'
          type="file"
          name="recipe-video"
        />
        <Button
          className='w-[100%]'
          type="submit"
        >
          Save
        </Button>
      </form>
    </div>
  );
}

export default AddRecipePage;