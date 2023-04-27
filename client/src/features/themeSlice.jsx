import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleHamburger: (state, { payload }) => {
      state.navOpen = !state.navOpen;
    },
  },
});

export const { toggleHamburger } = themeSlice.actions;

export default themeSlice.reducer;
