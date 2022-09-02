import React from "react";
import { Link } from "react-router-dom";

import { FiSearch, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import Logo from "../../assets/images/logo.png";
import buymeacoffe from "../../assets/images/buymeacoffe.svg";
import IconButton from "../IconButton";

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  return (
    <div className="header">
      <div className="container">
        <div className="header-logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="menu-button">
          <IconButton onClick={(e) => setOpenMenu((value) => !value)}>
            {openMenu ? <AiOutlineClose size={20} /> : <FiMenu size={20} />}
          </IconButton>
        </div>
        <div className={`header-menu ${openMenu ? "open" : ""}`}>
          <div className="container">
            <nav className="nav-menu">
              <div className="nav-item active">
                <Link to="/">Home</Link>
              </div>
              <div className="nav-item">
                <Link to="/test">Category</Link>
              </div>
              <div className="nav-item">
                <Link to="/">About Me</Link>
              </div>
              <div className="nav-item">
                <FiSearch
                  color="black"
                  style={{ verticalAlign: "top", marginRight: 4 }}
                  size={12}
                />
                <Link to="/">Search</Link>
              </div>
            </nav>
            <button className="btn btn-lg btn-primary">buy Me a Coffee</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
