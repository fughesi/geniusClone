import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "./index.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./features/themeSlice.jsx";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  // middleware,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
