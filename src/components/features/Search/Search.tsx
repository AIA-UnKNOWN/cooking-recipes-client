import React, { useEffect, useState } from 'react';
import { Input } from '@components/form/components';

const Search = props => {
  const {
    onChange,
  } = props;
  const DEBOUNCE_TIMEOUT = 1000;
  const [fireOnChange, setFireOnChange] = useState(true);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    // Debouce
    setFireOnChange(true);
    const timeOutId = setTimeout(() => {
      fireOnChange && searchKey !== '' && onChange(searchKey);
    }, DEBOUNCE_TIMEOUT);
    return () => {
      setFireOnChange(false);
      clearTimeout(timeOutId);
    }
  }, [fireOnChange, searchKey]);

  const changeHandler = e => {
    setFireOnChange(false);
    setSearchKey(e.target.value);
  }

  return (
    <Input
      className="w-[280px] h-[40px]"
      name="search"
      placeholder="Search"
      onChange={changeHandler}
    />
  );
}

export default Search;