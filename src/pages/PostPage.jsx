import React from 'react';
import PostDetail from '../components/PostDetail';
import { Link } from 'react-router-dom';

const PostPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Post Details</h1>
      <PostDetail />
      <Link to="/" className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Go to Home
      </Link>
    </div>
  );
};

export default PostPage;