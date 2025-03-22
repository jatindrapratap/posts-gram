import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About This Application</h1>
      <p className="mb-4">
        This application is a simple React app that demonstrates the use of Redux for state management.
        It fetches data from the JSONPlaceholder API and allows users to view, search, and filter posts.
      </p>
      <p className="mb-4">
        Users can click on a post title to view more details about that post. The application is styled using Tailwind CSS.
      </p>
      <Link to="/" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Go to Home
      </Link>
    </div>
  );
};

export default About;