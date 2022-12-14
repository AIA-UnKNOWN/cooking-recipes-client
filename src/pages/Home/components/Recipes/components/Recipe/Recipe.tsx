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
    /* States */
    isPlayVideo, setIsPlayVideo,
    /* Functions */
    deleteRecipeById,
    downloadRecipeVideo,
    updateRecipeById,
  } = useRecipe(props);

  const thumbnail = recipe?.Uploads?.find(file => file.type.split('/')[0] === 'image') || {};
  const videoSource = recipe?.Uploads?.find(file => file.type.split('/')[0] === 'video')?.file_path || null;
  const videoType = recipe?.Uploads?.find(file => file.type.split('/')[0] === 'video')?.type || null;

  return (
    <div className='w-[300px] shadow-sm shadow-gray-400 mb-[15px]'>
      <div className='relative'>
        {thumbnail && !isPlayVideo ? (
          <>
            <img
              src={`${API_URL}/${thumbnail.file_path}`}
              alt={recipe.name}
            />
            <button
              className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] scale-150'
              onClick={() => setIsPlayVideo(!isPlayVideo)}
            >
              <img src="https://img.icons8.com/ios-glyphs/30/AC80F3/play-button-circled--v1.png"/>
            </button>
          </>
        ) : (
          <>
            <video className='w-full' controls autoPlay={isPlayVideo}>
              <source src={videoSource ? `${API_URL}/${videoSource}` : ''} type={videoType} />
            </video>
          </>
        )}
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
            onClick={e => downloadRecipeVideo({ url: `${API_URL}/${videoSource}` || '', type: videoType, fileName: recipe.name })}
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