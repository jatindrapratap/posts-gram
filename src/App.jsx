import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

const Home = lazy(() => import('./pages/Home'));
const PostPage = lazy(() => import('./pages/PostPage'));
const About = lazy(() => import('./pages/About'));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto">
              <Link to="/" className="mr-4 hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
            </nav>
          </header>
          <main className="flex-grow">
            <Suspense fallback={<div className="text-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:postId" element={<PostPage />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Suspense>
          </main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2023 Your Name. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </Provider>
  );
};

export default App;