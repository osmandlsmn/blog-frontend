import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import { FaTwitterSquare, FaMedium, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-menu">
          <div className="footer-about">
            <img src={Logo} alt="logo" />
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              numquam!
            </p>
            <div className="social-medias">
              <Link to="/">
                <FaMedium color="black" size={30} />
              </Link>
              <Link to="/">
                <FaTwitterSquare color="black" size={30} />
              </Link>
              <Link to="/">
                <RiInstagramFill color="black" size={30} />
              </Link>
              <Link to="/">
                <FaLinkedin color="black" size={30} />
              </Link>
            </div>
          </div>
          <div>
            <h5>Category</h5>
            <ul>
              <li>
                <Link to="/">Html</Link>
              </li>
              <li>
                <Link to="/">CSS</Link>
              </li>
              <li>
                <Link to="/">Javascript</Link>
              </li>
              <li>
                <Link to="/">Tailwind</Link>
              </li>
              <li>
                <Link to="/">React JS</Link>
              </li>
              <li>
                <Link to="/">More Category</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>About Me</h5>
            <ul>
              <li>
                <Link to="/">About Me</Link>
              </li>
              <li>
                <Link to="/">Projects</Link>
              </li>
              <li>
                <Link to="/">Achievement</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Get in touch</h5>
            <ul>
              <li>
                <Link to="/">+62-8XXX-XXX-XX</Link>
              </li>
              <li>
                <Link to="/">demo@gmail.com</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Follow Us</h5>
            <ul>
              <li>
                <Link to="/">Medium</Link>
              </li>
              <li>
                <Link to="/">Instagram</Link>
              </li>
              <li>
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/">Facebook</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="line"></div>
        <div className="author-about">
          <p className="copyright">© 2022 Digitaldastin</p>
          <p className="copyright">Made With ❤️ Jakarta, Indonesia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
