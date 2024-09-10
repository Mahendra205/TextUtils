import React from "react";
import { Link } from "react-router-dom"
export default function Navber(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-bs-target="#navbarSupportedContent"
          data-bs-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link aria-current="page" className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
          <input
            aria-label="Search"
            className="form-control me-2"
            placeholder="Search"
            type="search"
          />
          <button
            className="btn btn-outline-primary"
            type="submit"
          >
            Search
          </button>
        </form> */}
          <div
            className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <input
              className="form-check-input"
              onClick={() => {
                props.toggleMode();
                props.changeMode();
              }}
               
              id="flexSwitchCheckDefault"
              role="switch"
              type="checkbox"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.textMode}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
