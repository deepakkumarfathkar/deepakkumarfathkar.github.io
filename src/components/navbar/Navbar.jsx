// import logo from './logo1.jpg';
import "./navbar.style.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-leftSide">
        <div className="logo">
          {/* <img src={logo}  /> */}
          <h2>Deepak Kumar Fathkar</h2>
        </div>
      </div>
      <div className="n-rightSide">
        <div className="n-list">
          <ul>
            <Link
              to="profile-wrapper"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
            >
              {" "}
              <li> Home</li>
            </Link>
            <Link
              to="a-wrapper"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
            >
              <li> About</li>
            </Link>
            <Link
              to="skills_sections"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
            >
              {" "}
              <li>Skills</li>
            </Link>
            <Link
              to="p-wrapper"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
            >
              {" "}
              <li> Projects</li>
            </Link>
            <Link
              to="c-wrapper"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
            >
              {" "}
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="hamburger">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};
export default Navbar;
