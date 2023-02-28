import {
  Container,
  Heading,
  Flex,
  VStack,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { IconContext } from "react-icons";
import profilePic from "./dp.JPG";

const Profile1 = () => {
  return (
    <Container maxW="full" p={0} className="profile-wrapper">
      <Flex
        h={{ base: "auto", md: "auto" }}
        py={0}
        px={6}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack w="full" h="full" p={10} spacing={10} /*bg={"red.50"}*/>
          <VStack spacing={4} alignItems={"flex-start"}>
            <Flex gap={2}>
              <Heading as="h1">Hi</Heading>
              <Image
                mt="-25px"
                w={"70px"}
                src="https://media.tenor.com/yWSRmymbuBkAAAAM/waving-hi.gif"
              />
            </Flex>

            <Heading as="h1">I am Deepak Kumar Fathkar</Heading>
            <Heading
              as="h1"
              color={"teal"}
              fontSiz="30px"
              fontFamily={"sans-serif"}
            >
              FullStack Web Developer
            </Heading>
            <Text fontSize={"18px"} fontFamily={"sans-serif"}>
              An enthusiastic Full Stack Web Developer with a strong set of
              technical as well as non-technical skills and a dedication towards
              creating useful and interactive web applications.
            </Text>
            <VStack spacing={4} mt="4" alignItems={"flex-start"}>
              <a href="https://drive.google.com/uc?export=download&id=1QBVKuaLzaOSURb6EeUII8VNdTeZ8gRnc">
                <Button
                  cursor={"pointer"}
                  colorScheme="teal"
                  size="lg"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1QBVKuaLzaOSURb6EeUII8VNdTeZ8gRnc/view?usp=sharing"
                    );
                  }}
                >
                  View Resume
                </Button>
              </a>
              <Flex gap={5}>
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
            </VStack>
          </VStack>
        </VStack>
        <VStack w="full" h="full" p={10} spacing={10}>
          <Image
            borderRadius={"full"}
            w="50%"
            src={profilePic}
            alt="my_profile pic"
          />
        </VStack>
      </Flex>
    </Container>
  );
};

export default Profile1;
