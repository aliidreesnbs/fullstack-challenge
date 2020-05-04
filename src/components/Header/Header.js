import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = ({ cartLength }) => {
  return (
    <nav className="navbar navbar-inverse navbar-expand-xl navbar-dark">
      <div className="navbar-header d-flex col">
        <NavLink className="navbar-brand" to="/">
          <i className="fa fa-cube"></i>Mobile<b>Store</b>
        </NavLink>
        <button
          type="button"
          data-target="#navbarCollapse"
          data-toggle="collapse"
          className="navbar-toggle navbar-toggler ml-auto"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>
      <div
        id="navbarCollapse"
        className="collapse navbar-collapse justify-content-start"
      >
        <form className="navbar-form form-inline">
          <div className="input-group search-box">
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Search here..."
            />
            <span className="input-group-addon">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
        </form>
        <ul className="nav navbar-nav navbar-right ml-auto">
          <li className="nav-item active" style={{ paddingRight: "20px" }}>
            <NavLink className="nav-link" to={"/cart"}>
              <i className="fa fa-shopping-cart mr-2" aria-hidden="true" />
              Cart {cartLength ? `(${cartLength})` : ""}
            </NavLink>
          </li>
          <li className="nav-item active dropdown">
            <a
              href="#"
              data-toggle="dropdown"
              className="nav-link dropdown-toggle user-action"
            >
              <img
                src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg"
                className="avatar"
                alt="Avatar"
              />{" "}
              Antonio Moreno <b className="caret"></b>
            </a>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="nav-link" to={"/profile"}>
                  <a href="#" className="dropdown-item">
                    <i className="fa fa-user-o"></i> Profile
                  </a>
                </NavLink>
              </li>
              <li className="divider dropdown-divider"></li>
              <li>
                <a href="#" className="dropdown-item">
                  <i class="fa fa-power-off"></i> Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    cartLength: state.shop.cart.length
  };
};

export default connect(mapStateToProps, null)(Header);
