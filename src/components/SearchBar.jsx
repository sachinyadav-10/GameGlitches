import React, { useState, useEffect } from 'react';
import { FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../store/slices/filterSlice';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      dispatch(setSearchQuery(query));
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [query, dispatch]);

  return (
    
    <div className='position-relative flex-grow-1 mx-4 '>
      <SearchIcon size={20} className='position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary'/>
      <FormControl
      type="text"
      placeholder="Search games..."
      className="ps-5 py-2 rounded-pill border-1 bg-transparent w-100 shadow-none"
      
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    </div>
  );
};

export default SearchBar;
