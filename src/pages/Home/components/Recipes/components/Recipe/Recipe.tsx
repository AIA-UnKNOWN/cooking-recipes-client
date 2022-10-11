import React from 'react';

import { API_URL } from '@env';
import { Button } from '@components/elements';
import ActionDropdown from '@components/features/ActionDropdown';
import useRecipe from './recipe.hook';

const Recipe = props => {
  const {
    data: recipe,
  } = props;
  const {
    deleteRecipeById,
    downloadRecipeVideo,
    updateRecipeById,
  } = useRecipe(props);

  const video = {
    source: `${API_URL}/${recipe?.Uploads[0]?.file_path}`,
    type: recipe?.Uploads[0]?.type,
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
                onClick: e => deleteRecipeById(recipe.id),
              }
            ]}
          />
        </div>
        <p className='text-[18px] pb-2 text-center font-bold'>{recipe.name}</p>
        <p className='text-[14px] pb-4 text-center'>{recipe.description || 'No description provided'}</p>
        <div className='flex flex-nowrap justify-between items-center'>
          <Button
            icon={
              <img
                className="scale-75"
                src="https://img.icons8.com/external-anggara-glyph-anggara-putra/32/ffffff/external-download-media-anggara-glyph-anggara-putra-2.png"
              />
            }
            className='text-[14px] w-[49%]'
            onClick={e => downloadRecipeVideo({ url: video.source, type: video.type, fileName: recipe.name })}
          >
            Download
          </Button>
          <Button
            icon={
              <img
                className="scale-75"
                src={`https://img.icons8.com/material-${recipe.is_favorite ? 'rounded' : 'outlined'}/24/AC80F3/like--v1.png`}
              />
            }
            className='text-[14px] w-[49%] bg-[#ffffff] text-[#AC80F3] border border-[#AC80F3]'
            onClick={e => updateRecipeById(recipe.id, { is_favorite: !recipe.is_favorite })}
          >
            Favorite
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Recipe;