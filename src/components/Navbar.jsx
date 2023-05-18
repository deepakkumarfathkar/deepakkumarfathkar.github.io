import { DownloadIcon } from "@chakra-ui/icons";
import { Center, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import styles from "../Styles/Navbar.module.css";
import MenuDrawer from "./MenuDrawer";

const Navbar1 = () => {
  return (
    <>
      <Center
        h={["2.5rem", "3rem", "3.5rem", "3.5rem"]}
        zIndex={"100"}
        position={"sticky"}
        top={0}
        left={0}
        bg="white"
        boxShadow="lg"
        color={"black"}
      >
        <Flex
          w={["100%", "100%", "100%", "100%", "1100px"]}
          px="1rem"
          alignItems="center"
          justify={"space-between"}
        >
          {/* logo */}
          <Text
            fontFamily={"Rancho, Sans-serif"}
            fontSize={["1.0rem", "0.8rem", "1.3rem"]}
            fontWeight={"bold"}
            color={"black"}
          >
            Deepak Kumar Fathkar
          </Text>

          {/* links */}
          <Flex
            gap={5}
            display={["none", "none", "none", "flex"]}
            justify={"space-around"}
            align={"center"}
          >
            <Link
              to="profile-wrapper"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.nav__link}
              color={"black"}
            >
              Home
            </Link>
            <Link
              to="a-wrapper"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.nav__link}
              color={"black"}
            >
              About Me
            </Link>
            <Link
              to="skills_sections"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.nav__link}
              color={"black"}
            >
              Skills
            </Link>
            <Link
              to="p-wrapper"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.nav__link}
              color={"black"}
            >
              Projects
            </Link>
            <Link
              to="github-st"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.nav__link}
              color={"black"}
            >
              Github Stats
            </Link>
            <Link
              to="c-wrapper"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.nav__link}
              color={"black"}
            >
              Contact
            </Link>

            <a
              href="https://drive.google.com/uc?export=download&id=1He4KvwYyIXhui3MMVRpQl4gtzyd32mST"
              className="resume-btn"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1He4KvwYyIXhui3MMVRpQl4gtzyd32mST/view?usp=share_link"
                );
              }}
              w={"150px"}
              textAlign="center"
              display={["none", "block"]}
              py="0.5rem"
              borderRadius="5px"
              color={"black"}
              fontSize={"1rem"}
              fontWeight={700}
            >
              <Flex align={"center"} gap={1} justify="center">
                <DownloadIcon />
                <Text color={"black"}>Resume</Text>
              </Flex>
            </a>
          </Flex>

          {/* menu drawer */}
          <MenuDrawer />
        </Flex>
      </Center>
    </>
  );
};

export default Navbar1;
