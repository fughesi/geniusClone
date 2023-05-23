import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import "./App.css";

import PrimaryLayout from "./pages/primaryLayout/PrimaryLayout";
import Newsfeed from "./pages/primaryLayout/news/Newsfeed";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PrimaryLayout />}>
        <Route index element={<Newsfeed />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
