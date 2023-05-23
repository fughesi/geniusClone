import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // base64: (based) => {
  //   btoa(
  //     new Uint8Array(based.payload).reduce((data, byte) => {
  //       return data + String.fromCharCode(byte);
  //     }, "")
  //   );
  // },
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    // mapImage: (state, { payload }) => {
    //   return state.base64();
    // },
  },
});

export const {} = utilsSlice.actions;

export default utilsSlice.reducer;
