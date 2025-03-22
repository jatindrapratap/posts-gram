import React from 'react';
import { useDispatch } from 'react-redux';
import { filterPosts } from '../features/posts/postsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    dispatch(filterPosts(searchTerm));
  };

  return (
    <input
      type="text"
      placeholder="Search posts..."
      onChange={handleSearch}
      className="border p-2 rounded mb-4"
    />
  );
};

export default SearchBar;