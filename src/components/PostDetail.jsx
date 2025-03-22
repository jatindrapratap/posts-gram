import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostDetail = () => {
  const { postId } = useParams();
  const post = useSelector((state) => state.posts.items.find(p => p.id === Number(postId)));

  if (!post) {
    return <div className="text-center text-lg">Post not found</div>;
  }

  return (
    <div className="p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default PostDetail;