// src/features/posts/postsSelectors.js

// Selector to get all posts
export const selectPosts = (state) => state.posts.items;

// Selector to get filtered posts
export const selectFilteredPosts = (state) => state.posts.filteredItems;