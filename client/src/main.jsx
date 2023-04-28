import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "./index.css";

import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

//FEATURES
import themeReducer from "./features/themeSlice.jsx";
//SERVICES
import { usersApi } from "./services/UsersAPI.jsx";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
