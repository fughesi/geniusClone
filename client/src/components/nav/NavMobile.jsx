import { useDispatch, useSelector } from "react-redux";
import { toggleHamburger } from "../../features/themeSlice.jsx";
import { NavLink } from "react-router-dom";
import "./nav.css";

export default function NavMobile() {
  const dispatch = useDispatch();

  const navOpen = useSelector((state) => state.theme.navOpen);

  return (
    <nav className="mobileNav">
      <section className="navMobileContainer">
        <div
          className={`hamburger ${navOpen ? "navOpen" : ""}`}
          onClick={() => {
            dispatch(toggleHamburger());
          }}
        >
          <div></div>
        </div>
        <div className="geniusTitle">GENIUS</div>
        <div className="registrationPrompt">REGISTER</div>
      </section>

      <section className="collapsableNavMenu">
        <ul className="mobileNavList">
          <NavLink to="/">
            <li>FEATURED</li>
          </NavLink>
          <NavLink to="/">
            <li>CHARTS</li>
          </NavLink>
          <NavLink to="/">
            <li>VIDEOS</li>
          </NavLink>
          <NavLink to="/">
            <li>PROMOTE YOUR MUSIC</li>
          </NavLink>
          <NavLink to="/">
            <li>social icons</li>
          </NavLink>
        </ul>
      </section>
    </nav>
  );
}
