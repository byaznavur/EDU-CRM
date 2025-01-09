import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-info py-4 fixed-top">
      <nav className="container d-flex justify-content-between align-items-center mx-auto">
        <Link to="/home" className="fw-bold fs-3 text-white">
          EDU CRM
        </Link>

        <ul className=" d-flex justify-content-between gap-5">
          <li>
            <NavLink
              className="text-white fs-5 link-opacity-75-hover"
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white fs-5 link-opacity-75-hover"
              to="/teachers"
            >
              Teachers
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white fs-5 link-opacity-75-hover"
              to="/students"
            >
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white  fs-5 link-opacity-75-hover"
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
