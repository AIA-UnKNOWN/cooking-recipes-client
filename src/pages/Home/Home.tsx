import React from 'react';

import useHome from './home.hook';
import { Button } from '@components/elements';
import {
  Header, Wrapper,
} from '@components/layouts';
import Recipes from './components/Recipes';
import Pagination from '@components/features/Pagination';

const Home = props => {
  const {
    // States
    paginationMeta,
    // Functions
    setPaginationMeta,
    onClickAddRecipe,
    getAllRecipesWithPagination,
  } = useHome();

  return (
    <div>
      <Header
        onChangeSearch={value => getAllRecipesWithPagination({
          searchKey: value,
        }, paginationMeta)}
      />
      <Wrapper>
        <div className='flex justify-center items-center py-[25px]'>
          <Button
            icon={
              <img
                className='scale-75'
                src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/48/ffffff/external-plus-user-interface-tanah-basah-detailed-outline-tanah-basah-2.png"
              />
            }
            onClick={onClickAddRecipe}
            className="pr-3 min-w-[150px]"
          >
            Add recipe
          </Button>        
        </div>
        <Recipes setPagination={setPaginationMeta} />
        <div className='flex justify-center items-center py-2'>
          <Pagination
            meta={paginationMeta}
            onPrev={meta => getAllRecipesWithPagination({}, meta)}
            onNext={meta => getAllRecipesWithPagination({}, meta)}
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default Home;