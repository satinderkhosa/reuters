import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: true,
  error: false,
  sort: "gold"
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
     setError(state, action) {
      state.error = action.payload;
    }
  },
});

export const { setData, setLoading, setSort, setError } = dataSlice.actions;
export default dataSlice.reducer;