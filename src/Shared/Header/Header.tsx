import React from "react";
import { Dropdown, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate()
    const onLogout = ()=>{
        navigate('/')
    }
  return (
    <div className="d-flex justify-content-end border w-full p-3 header">
      <div className="d-flex">
        <NavDropdown
          id="nav-dropdown-dark-example"
          title={
            <>
              <span className="text-white">DEMO</span>
            </>
          }
          menuVariant="light"
        >
          <NavDropdown.Item>
            <Link to="/profile" className="text-decoration-none text-black">
              Profile
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link
              to="/change-password"
              className="text-decoration-none text-black"
            >
              Change Password
            </Link>
          </NavDropdown.Item>
          {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </div>
    </div>
  );
};

export default Header;
