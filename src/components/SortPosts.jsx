import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../features/posts/postsSlice';

const SortPosts = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.posts.sortBy);

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div className="mb-4">
      <label htmlFor="sort" className="mr-2">Sort by:</label>
      <select id="sort" value={sortBy} onChange={handleSortChange} className="border rounded p-2">
        <option value="title">Title</option>
        <option value="date">Date</option>
      </select>
    </div>
  );
};

export default SortPosts;