// import logo from './logo1.jpg';
import "./navbar.style.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { Heading } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-leftSide">
        <div className="logo">
          {/* <img src={logo}  /> */}
          <Heading as="h2">Deepak Kumar Fathkar</Heading>
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
            <a
              href="https://drive.google.com/uc?export=download&id=1xJzQsMlHgFG7D14iTEfV_gR0tKKDgBiR"
              className="resume-btn"
            >
              {" "}
              <li>Resume</li>
            </a>
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
