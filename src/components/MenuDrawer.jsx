import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
  Text
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { useRef } from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import styles from "../Styles/MenuDrawer.module.css";
import { DownloadIcon } from "@chakra-ui/icons";

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <HamburgerIcon
        w={6}
        h={6}
        onClick={onOpen}
        display={["block", "block", "block", "none"]}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        size={"xs"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Deepak Kumar Fathkar</DrawerHeader>
          <DrawerBody display={"flex"} flexDir={"column"}>
            <Link
              to="profile-wrapper"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.link}
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              to="a-wrapper"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.link}
              onClick={onClose}
            >
              About Me
            </Link>
            <Link
              to="skills_sections"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.link}
              onClick={onClose}
            >
              Skills
            </Link>
            <Link
              to="p-wrapper"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.link}
              onClick={onClose}
            >
              Projects
            </Link>
            <Link
              to="github-st"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.link}
              onClick={onClose}
            >
              Github Stats
            </Link>
            <Link
              to="c-wrapper"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.link}
              onClick={onClose}
            >
              Get In Touch
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
              bg="light.main"
              color="dark"
              fontSize={"1rem"}
              fontWeight={700}
            >
              <Flex align={"center"} gap={1} justify="center">
                <DownloadIcon />
                <Text>Resume</Text>
              </Flex>
            </a>
          </DrawerBody>
          <DrawerFooter borderTop={"1px solid lightgray"}>
            <Flex gap={8} w={"full"} justify="center" fontSize={"1.5rem"}>
              <Link href="https://twitter.com/abhayfaldu19">
                <BsTwitter color="#1da1f2" />
              </Link>
              <Link href="https://www.linkedin.com/in/abhay-faldu-493b92211/">
                <BsLinkedin color="#0e76a8" />
              </Link>
              <Link href="https://github.com/abhayfaldu">
                <BsGithub color="#171515" />
              </Link>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
