import React from 'react';

import { API_URL } from '@env';
import { Button } from '@components/elements';
import ActionDropdown from '@components/features/ActionDropdown';
import useRecipe from './recipe.hook';

const Recipe = props => {
  const {
    data,
  } = props;
  const {
    deleteRecipeById,
    downloadRecipeVideo,
  } = useRecipe(props);

  const video = {
    source: `${API_URL}/${data?.Uploads[0]?.file_path}`,
    type: data?.Uploads[0]?.type,
  }
  
  return (
    <div className='w-[300px] shadow-sm shadow-gray-400 mb-[15px]'>
      <div>
        <video
          className='w-full'
          controls
        >
          <source src={video.source} type={video.type} />
        </video>
      </div>
      <div className='p-[15px] relative'>
        <div className='absolute right-[15px] top-[15px]'>
          <ActionDropdown
            actions={[
              {
                name: 'Delete',
                onClick: e => deleteRecipeById(data.id),
              }
            ]}
          />
        </div>
        <p className='text-[18px] pb-2 text-center font-bold'>{data.name}</p>
        <p className='text-[14px] pb-4 text-center'>{data.description || 'No description provided'}</p>
        <div className='flex flex-nowrap justify-between items-center'>
          <Button
            icon="fa fa-cloud-download"
            className='text-[14px] w-[49%]'
            onClick={e => downloadRecipeVideo({ url: video.source, type: video.type, fileName: data.name })}
          >
            Download
          </Button>
          <Button
            icon="fa fa-heart"
            className='text-[14px] w-[49%] bg-[#ffffff] text-[#AC80F3] border border-[#AC80F3]'
          >
            Favorite
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Recipe;