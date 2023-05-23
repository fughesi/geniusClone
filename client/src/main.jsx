import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "./index.css";

import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

//FEATURES
import themeReducer from "./features/themeSlice.jsx";
import utilsReducer from "./features/utilsSlice.jsx";
//SERVICES
import { usersApi } from "./services/UsersAPI.jsx";
import { newsApi } from "./services/NewsAPI.jsx";
import { songsApi } from "./services/SongAPI.jsx";
import { practiceApi } from "./services/practiceAPI.jsx";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    utils: utilsReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [songsApi.reducerPath]: songsApi.reducer,
    [practiceApi.reducerPath]: practiceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      usersApi.middleware,
      newsApi.middleware,
      songsApi.middleware,
      practiceApi.middleware
    ),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
