// import logo from './logo1.jpg';
import "./navbar.style.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { Box, Heading } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Box w="100%" className="n-wrapper">
      <div className="n-leftSide">
        <div className="logo">
          {/* <img src={logo}  /> */}
          <Heading as={"h2"}>Deepak Kumar Fathkar</Heading>
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
              href="https://drive.google.com/uc?export=download&id=1He4KvwYyIXhui3MMVRpQl4gtzyd32mST"
              className="resume-btn"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1He4KvwYyIXhui3MMVRpQl4gtzyd32mST/view?usp=share_link"
                );
              }}
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
    </Box>
  );
};
export default Navbar;
