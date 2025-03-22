import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../features/posts/postsSlice';
import PostList from '../components/PostList';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      // Fetch all posts when the component mounts
      dispatch(getPosts());
    }, [dispatch]);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <SearchBar />
        <PostList />
      </div>
    );
  };
  
  export default Home; 