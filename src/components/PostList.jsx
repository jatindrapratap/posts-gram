import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../features/posts/postsSlice';
import { selectFilteredPosts } from '../features/posts/postsSelectors';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectFilteredPosts);
  const loading = useSelector((state) => state.posts.loading);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  // Get current posts
  const currentPosts = posts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div>
      <ul className="space-y-4">
        {currentPosts.map((post) => (
          <li key={post.id} className="border p-4 rounded shadow hover:bg-gray-100 transition">
            <Link to={`/post/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded bg-blue-600 text-white cursor-pointer"
        >
          Previous
        </button>
        <div className="flex items-center">
          {/* Show first page */}
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(1)}
              className="mx-1 px-3 py-1 border rounded bg-white text-blue-600 cursor-pointer"
            >
              1
            </button>
          )}
          {/* Show ellipsis if there are pages between the first and current page */}
          {currentPage > 3 && <span className="mx-1">...</span>}
          {/* Show page numbers around the current page */}
          {Array.from({ length: Math.min(3, totalPages) }, (_, index) => {
            const pageNumber = currentPage - 1 + index;
            if (pageNumber > 1 && pageNumber < totalPages) {
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`mx-1 px-3 py-1 border rounded ${currentPage === pageNumber ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 cursor-pointer'}`}
                >
                  {pageNumber}
                </button>
              );
            }
            return null;
          })}
          {/* Show ellipsis if there are pages between the current and last page */}
          {currentPage < totalPages - 2 && <span className="mx-1">...</span>}
          {/* Show last page */}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(totalPages)}
              className="mx-1 px-3 py-1 border rounded bg-white text-blue-600 cursor-pointer"
            >
              {totalPages}
            </button>
          )}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded bg-blue-600 text-white cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;