import { Link } from "react-router-dom";
import "./footer.scss";
import { GiBookAura } from "react-icons/gi";
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg__accent text__color">
      <div className="top">
        <div className="box1">
          <div className="logo text__primary">
            <h4>VIT Library</h4>
          </div>
          <p style={{ marginTop: "8px", lineHeight: "1.5rem" }}>
            An open and inclusive environment where VIT students, faculty, and staff can explore knowledge, make discoveries, and engage in lifelong learning together.
          </p>
        </div>
        <div className="box2">
          <h4>USEFUL LINKS</h4>
          <Link to="/" className="text__color">
            Home
          </Link>
          <Link to="/about-us" className="text__color">
            About Us
          </Link>
          <Link to="/contact-us" className="text__color">
            Contact Us
          </Link>
          <Link to="/login" className="text__color">
            Login
          </Link>
        </div>

        <div className="box3">
          <h4>OTHER USEFUL LINKS</h4>
          <Link to="/" className="text__color">
            Books
          </Link>
          <Link to="/about-us" className="text__color">
            EBooks
          </Link>
          <Link to="/contact-us" className="text__color">
            Dashboard
          </Link>
          <Link to="/login" className="text__color">
            Forget Password
          </Link>
        </div>

        <div className="box4">
          <h4>CONTACT</h4>
          <div className="item">
            <AiOutlineHome className="icon__home" />
            <span>Periyar evr central library, VIT vellore</span>
          </div>
          <div className="item">
            <AiOutlineMail className="icon" />
            <span>vitlib@gmail.com</span>
          </div>
          <div className="item">
            <AiOutlinePhone className="icon" />
            <span>9490145777</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span>
          &copy;2025 Copyright : VIT Library Management System, Vellore
        </span>
      </div>
    </footer>
  );
};

export default Footer;
