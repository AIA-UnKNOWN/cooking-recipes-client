import React from 'react';
import { Input } from '@components/form/components';

const Search = props => {

  return (
    <Input
      className="w-[280px] h-[30px]"
      name="search"
      placeholder="Search"
    />
  );
}

export default Search;