import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../media/images/Star_Wars_Logo.svg";

import "./Header.scss";

const HomeIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.8459 11.138L12.3459 0.138C12.1529 -0.046 11.8479 -0.046 11.6549 0.138L0.154897 11.138C0.0068967 11.279 -0.0401033 11.496 0.0358967 11.685C0.111897 11.875 0.295897 11.999 0.499897 11.999H23.4999C23.7039 11.999 23.8879 11.875 23.9639 11.685C24.0399 11.496 23.9939 11.279 23.8459 11.138Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18.4995C10 18.7755 9.776 18.9995 9.5 18.9995H6.5C6.224 18.9995 6 18.7755 6 18.4995V15.4995C6 15.2235 6.224 14.9995 6.5 14.9995H9.5C9.776 14.9995 10 15.2235 10 15.4995V18.4995ZM20.5 12.9995H3.5C3.224 12.9995 3 13.2235 3 13.4995V23.4995C3 23.7755 3.224 23.9995 3.5 23.9995H13V15.4995C13 15.2235 13.224 14.9995 13.5 14.9995H17.5C17.776 14.9995 18 15.2235 18 15.4995V23.9995H20.5C20.776 23.9995 21 23.7755 21 23.4995V13.4995C21 13.2235 20.776 12.9995 20.5 12.9995Z"
      />
    </svg>
  );
};

const FavIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.991 6.407C23.812 2.844 20.857 0 17.25 0C15.192 0 13.277 0.928 12 2.513C10.723 0.928 8.808 0 6.75 0C3.143 0 0.187 2.844 0.009 6.407C0.003 6.437 0 6.469 0 6.5V6.75C0 6.781 0.003 6.812 0.008 6.842C0.298 12.756 7.901 21.632 11.743 23.928C11.822 23.976 11.911 24 12 24C12.089 24 12.178 23.976 12.257 23.928C16.098 21.632 23.702 12.756 23.992 6.842C23.997 6.812 24 6.781 24 6.75V6.5C24 6.469 23.997 6.437 23.991 6.407Z"
    />
  </svg>
);

const header = props => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header-navbar">
        <NavLink className="navlink" to="/" exact>
          <HomeIcon />
          raaaaaahhgh
        </NavLink>
        <NavLink className="navlink" to="/favourites" exact>
          <FavIcon />
          huuguughghg huurh
        </NavLink>
      </div>
    </div>
  );
};

export default header;
