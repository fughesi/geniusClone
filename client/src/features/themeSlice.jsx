import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
  dateFormatter: {},
  monthArr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleHamburger: (state, { payload }) => {
      state.navOpen = !state.navOpen;
    },
    // dateformatter: (state, { payload }) => {
    //   const formattedDate = (payload) => {
    //     const dateFormatter = {
    //       mm: date.getMonth() + 1,
    //       dd: date.getDate(),
    //       yy: date.getFullYear().toString().slice(-2),
    //       yyyy: date.getFullYear(),
    //     };

    //     return format.replace(/mm|dd|yy|yyyy/gi, (i) => dateFormatter[i]);
    //   };
    //   console.log(formattedDate(new Date().toDateString()));
    //   // state.dateFormatter = formattedDate;
    // },
  },
});

export const { toggleHamburger, dateformatter } = themeSlice.actions;

export default themeSlice.reducer;
