import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { IconContext } from "react-icons";
import "./Profile.style.css";
import profilePic from "./dp.JPG";
// import Typist from "react-typist";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
const ProfileComponent = () => {
  return (
    <Box w="100%" className="profile-wrapper">
      <div className="profile-container">
        <div className="leftBio">
          <Heading as="h1">
            Hi
            <img src="https://media.tenor.com/yWSRmymbuBkAAAAM/waving-hi.gif" />
          </Heading>
          <Heading as="h1">I am Deepak Kumar Fathkar</Heading>
          {/* <Typist>
                    </Typist> */}
          <Heading as="h1" className="typist">
            FullStack Web Developer
          </Heading>
          <Text>
            An enthusiastic Full Stack Web Developer with a strong set of
            technical as well as non-technical skills and a dedication towards
            creating useful and interactive web applications.
          </Text>
          <div
            className="resume"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1UXzaRdcHcH9QbODH3DyEZ7Fm0XcUchdo/view?usp=share_link"
              );
            }}
          >
            <a href="https://drive.google.com/uc?export=download&id=1UXzaRdcHcH9QbODH3DyEZ7Fm0XcUchdo">
              View Resume
            </a>
          </div>
          <Flex>
            <IconContext.Provider value={{ className: "git-icon" }}>
              <AiFillGithub
                size="2rem"
                onClick={() => {
                  window.open("https://github.com/deepakkumarfathkar");
                }}
              />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "linkedin-icon" }}>
              <AiFillLinkedin
                size="2rem"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/deepak-kumar-fathkar-b1678b13b/"
                  );
                }}
              />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "gmail-icon" }}>
              <SiGmail
                size="2rem"
                onClick={() => {
                  window.open("https://mail.google.com/mail/u/2/#inbox");
                }}
              />
            </IconContext.Provider>
          </Flex>
        </div>
        <div className="rightDP">
          <div className="formalPicture">
            <img src={profilePic} alt="" />
          </div>
        </div>
      </div>
    </Box>
  );
};
export default ProfileComponent;
