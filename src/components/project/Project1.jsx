import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import {
  Icon,
  Box,
  //   RangeSlider,
  //   RangeSliderTrack,
  //   RangeSliderFilledTrack,
  //   RangeSliderThumb,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
// import { MdGraphicEq } from "react-icons/md";
import {
  SiBootstrap,
  SiChakraui,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
} from "react-icons/si";
import { DiReact } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { RiExternalLinkLine } from "react-icons/ri";
import kindmealPoster from "./port.png";
import lifestylePoster from "./proj2.png";
import apolloPoster from "./proj3.png";
import indi from "./indi.png";

import React from "react";
import "./Project1.css";

const Project1 = () => {
  const handledeploy = (link) => {
    window.open(link);
  };
  const handleGit = (link) => {
    window.open(link);
  };
  return (
    <div id="projectScroll" className="p-wrapper">
      <div className="Project">
        <h1>Projects</h1>
        <div className="ProjectGrid">
          <Box
            bg="white"
            className="Project1"
            data-aos="fade-up"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            border={"1px solid teal"}
          >
            <div>
              <img src={kindmealPoster} alt="p1" />
            </div>
            <div className="ProjectD">
              <h1>NORDSTORM.COM (CLONE)</h1>

              <Text>
                NORDSTORM is a online shoping website where you can purchase or
                sell products like cloths, bueaty, and other accesory.
                Lifestyle's inventory consists of several national and
                international brands, and its product categories include Indian
                and western apparels, footwear, handbags, beauty products, and
                fashion accessories for men, women, and children.
              </Text>
              <Flex gap={2}>
                <Heading as={"h2"} fontWeight={"bold"}>
                  Tech stack:
                </Heading>
                <SiReact color="#61DBFB" size="2rem" />
                <SiChakraui color="teal" size="2rem" />
                {/* <SiBootstrap color="#563d7c" size="2rem" /> */}
                <SiJavascript size="2rem" color="#F0DB4F" />
                <SiCss3 size="2rem" color="#264de4" />
                <SiHtml5 color="#e34c26" size="2rem" />
              </Flex>
              <Link
                onClick={() =>
                  handledeploy(
                    "https://drive.google.com/file/d/191cnJcpztJDb-wGyYu2hHWjPqwcQJInu/view?usp=sharing"
                  )
                }
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  mb="15px"
                  bg="Teal"
                >
                  <Flex gap={2}>
                    <Text>Website</Text>
                    <RiExternalLinkLine />
                  </Flex>
                </Button>
              </Link>
              <Link
                onClick={() =>
                  handleGit(
                    "https://github.com/deepakkumarfathkar/Dreamlaza-Shopper"
                  )
                }
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                  mb="15px"
                >
                  <Flex gap={2}>
                    <Text>Github</Text>
                    <Icon as={BsGithub} />
                  </Flex>
                </Button>
              </Link>
            </div>
          </Box>
          <Box
            style={{ marginTop: "50px" }}
            bg="gray.50"
            className="Project1"
            data-aos="fade-up"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            border={"1px solid teal"}
          >
            <div>
              <img src={lifestylePoster} alt="p1" />
            </div>
            <div className="ProjectD">
              <h1>SEMRUSH.COM (CLONE)</h1>

              <Text>
                It is the only software which enables marketing professionals to
                build, manage, and measure campaigns across all channels to
                improve their online visibility. Semrush is your digital team
                member—your analytics buddy, your mentor, your safety net, and a
                compass to new markets
              </Text>
              <Flex gap={2}>
                <Heading as={"h2"} fontWeight={"bold"}>
                  Tech stack:
                </Heading>
                {/* <DiReact color="#61DBFB" size="2rem" /> */}
                {/* <SiChakraui color="teal" size="2rem" /> */}
                <SiBootstrap color="#563d7c" size="2rem" />
                <SiJavascript size="2rem" color="#F0DB4F" />
                <SiCss3 size="2rem" color="#264de4" />
                <SiHtml5 color="#e34c26" size="2rem" />
              </Flex>
              <Link
                onClick={() =>
                  handledeploy("https://sunny-zabaione-bf8058.netlify.app/")
                }
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  mb="15px"
                  bg="Teal"
                >
                  <Flex gap={2}>
                    <Text>Website</Text>
                    <RiExternalLinkLine />
                  </Flex>
                </Button>
              </Link>
              <Link
                onClick={() =>
                  handleGit(
                    "https://github.com/deepakkumarfathkar/SEMRUSH.COM_CLONE"
                  )
                }
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                  mb="15px"
                >
                  {" "}
                  <Flex gap={2}>
                    <Text>Github</Text>
                    <Icon as={BsGithub} />
                  </Flex>
                </Button>
              </Link>
            </div>
          </Box>
          <Box
            bg="white"
            style={{ marginTop: "50px" }}
            className="Project1"
            data-aos="fade-up"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            border={"1px solid teal"}
          >
            <div>
              <img src={apolloPoster} alt="p1" />
            </div>
            <div className="ProjectD">
              <h1>MAILCHIMP.COM (CLONE)</h1>

              <Text>
                This website is clone of Mailchimp and it will guide your
                business with the right marketing & sales tools. also, this
                website is fully responsive and five people collaborated on the
                project, which was finished in five days.
              </Text>
              <Flex gap={2}>
                <Heading as={"h2"} fontWeight={"bold"}>
                  Tech stack:
                </Heading>
                <SiReact color="#61DBFB" size="2rem" />
                <SiChakraui color="teal" size="2rem" />
                {/* <SiBootstrap color="#563d7c" size="2rem" /> */}
                <SiJavascript size="2rem" color="#F0DB4F" />
                <SiCss3 size="2rem" color="#264de4" />
                <SiHtml5 color="#e34c26" size="2rem" />
              </Flex>
              <Link
                onClick={() =>
                  handledeploy("https://rad-semolina-cd66f1.netlify.app/")
                }
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  mb="15px"
                  bg="Teal"
                >
                  <Flex gap={2}>
                    <Text>Website</Text>
                    <RiExternalLinkLine />
                  </Flex>
                </Button>
              </Link>
              <Link
                onClick={() =>
                  handleGit(
                    "https://github.com/shivamsherje/delightful-animal-1301/tree/main/mailchimp"
                  )
                }
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                  mb="15px"
                >
                  <Flex gap={2}>
                    <Text>Github</Text>
                    <Icon as={BsGithub} />
                  </Flex>
                </Button>
              </Link>
            </div>
          </Box>
          <Box
            style={{ marginTop: "50px" }}
            bg="gray.50"
            className="Project1"
            data-aos="fade-up"
            data-aos-offset="-100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            border={"1px solid teal"}
          >
            <div>
              <img src={indi} alt="p1" />
            </div>
            <div className="ProjectD">
              <h1>INDIWEBMALL</h1>

              <Text>
                IndiWebmall is ecommerce website where we can buy different
                categories of products and also we can buy coupons to shop other
                products and gift them to others
              </Text>
              <Flex gap={2}>
                <Heading as={"h2"} fontWeight={"bold"}>
                  Tech stack:
                </Heading>
                <SiReact color="#61DBFB" size="2rem" />
                <SiChakraui color="teal" size="2rem" />
                <SiBootstrap color="#563d7c" size="2rem" />
                <SiJavascript size="2rem" color="#F0DB4F" />
                <SiCss3 size="2rem" color="#264de4" />
                <SiHtml5 color="#e34c26" size="2rem" />
              </Flex>
              <Link
                onClick={() =>
                  handledeploy("https://indiwebmall-nine.vercel.app/")
                }
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  mb="15px"
                  bg="Teal"
                >
                  <Flex gap={2}>
                    <Text>Website</Text>
                    <RiExternalLinkLine />
                  </Flex>
                </Button>
              </Link>
              <Link
                onClick={() =>
                  handleGit("https://github.com/shivshankar0965/indiwebmall")
                }
              >
                {" "}
                <Button
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                  mb="15px"
                >
                  <Flex gap={2}>
                    <Text>Github</Text>
                    <Icon as={BsGithub} />
                  </Flex>
                </Button>
              </Link>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Project1;
