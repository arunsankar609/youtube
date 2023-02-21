import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    getSearch: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export const { getSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
