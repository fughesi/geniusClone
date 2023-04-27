import { Outlet } from "react-router-dom";

import NavMobile from "../../components/nav/navMobile.jsx";

import "./PrimaryLayout.css";

export default function PrimaryLayout() {
  return (
    <main>
      <NavMobile />
      <Outlet />
    </main>
  );
}
