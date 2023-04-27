import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes } from "react-router-dom";
import "./App.css";
import PrimaryLayout from "./pages/primaryLayout/PrimaryLayout";

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<PrimaryLayout />}></Route>));

  return <RouterProvider router={router} />;
}
