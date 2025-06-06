import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
  return (
    <>
      <NavWrapper>
        <nav>
          <ul>
            {/* left side */}
            <li className="logo">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "list-item active" : "list-item"
                }
              >
                Home
              </NavLink>
            </li>
            {/* right side */}
            <li className="pages">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "list-item active" : "list-item"
                }
              >
                Products
              </NavLink>

              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "list-item active" : "list-item"
                }
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </NavWrapper>
    </>
  );
};
const NavWrapper = styled.nav`
  position: sticky;
  top: 5px;

  font-family: cursive;
  font-size: 1.2rem;
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;

  nav {
    height: 100%;
    background-color: beige;
    width: 99%;
    border-radius: 10px;
    box-shadow: 0px 1px 10px 2px grey;
  }

  ul {
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    .logo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 2rem;
    }
    .pages {
      display: flex;
      flex-direction: row;
      column-gap: 2rem;
      justify-content: flex-end;
      padding-right: 2rem;
    }
  }

  .list-item {
    color: black;
    text-decoration: none;
    transition: transform 0.3s ease, color 0.3s ease;

    &.active {
      color: blueviolet;
      text-decoration-line: underline;
      transform: scale(1.1);
    }
  }
`;
export default Navbar;
