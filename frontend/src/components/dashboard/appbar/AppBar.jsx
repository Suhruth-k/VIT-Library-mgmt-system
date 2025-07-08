import "./appbar.scss";
import { GiBookAura } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function AppBar({ open, setOpen }) {
  return (
    <div className="appbar bg__accent ">
      <div className="left">
        {/* sidebar toggler */}
        <button
          className="btn__icon btn__hamburger text__color"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <AiOutlineMenu className="icon" />
        </button>

        {/* logo */}
        <Link to="/" className="logo text__primary">
          <span>VIT Library</span>
        </Link>
      </div>

      {/* right side - toggle button removed */}
      <div className="right"></div>
    </div>
  );
}

export default AppBar;
