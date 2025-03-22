import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts } from './postsApi';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  const response = await fetchPosts();
  return response;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    loading: false,
    filteredItems: [],
  },
  reducers: {
    filterPosts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredItems = state.items.filter(post =>
        post.title.toLowerCase().includes(searchTerm)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loading = false;
        state.items = action.payload; // Set all posts directly
        state.filteredItems = action.payload; // Initialize filtered items
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { filterPosts } = postsSlice.actions;

export default postsSlice.reducer;