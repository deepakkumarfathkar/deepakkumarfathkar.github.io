import "./projects.style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import kindmealPoster from "./port.png";
import lifestylePoster from "./proj2.png";
import apolloPoster from "./proj3.png";
import {
  SiBootstrap,
  SiChakraui,
  SiJavascript,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { DiReact } from "react-icons/di";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { RiExternalLinkLine } from "react-icons/ri";
import { useEffect } from "react";
import { Box,Heading } from "@chakra-ui/react";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  const projects = [
    {
      title: "Project-1",
      poster_url: kindmealPoster,
      name: "NORDSTORM.COM (CLONE)",
      description:
        "NORDSTORM is a online shoping website where you can purchase or sell products like cloths, bueaty, and other accesory. Lifestyle's inventory consists of several national and international brands, and its product categories include Indian and western apparels, footwear, handbags, beauty products, and fashion accessories for men, women, and children.",
      tech_stack: [
        <DiReact color="#61DBFB" size="2rem" />,
        <SiChakraui color="teal" size="2rem" />,
        <SiBootstrap color="#563d7c" size="2rem" />,
        <SiJavascript size="2rem" color="#F0DB4F" />,
        <SiCss3 size="2rem" color="#264de4" />,
        <AiFillHtml5 color="#e34c26" size="2rem" />,
      ],
      git_link: "https://github.com/deepakkumarfathkar/Dreamlaza-Shopper",
      deploy_link: "https://dreamlaza-shopper.netlify.app/",
      animation: "fade-right",
    },
    {
      title: "Project-2",
      poster_url: lifestylePoster,
      name: "SEMRUSH.COM (CLONE)",
      description:
        "It is the only software which enables marketing professionals to build, manage, and measure campaigns across all channels to improve their online visibility. Semrush is your digital team member—your analytics buddy, your mentor, your safety net, and a compass to new markets",
      tech_stack: [
        <SiJavascript size="2rem" color="#F0DB4F" />,
        <SiCss3 size="2rem" color="#264de4" />,
        <SiHtml5 size="2rem" color="#264de4" />,
        <AiFillHtml5 color="#e34c26" size="2rem" />,
      ],
      git_link: "https://github.com/deepakkumarfathkar/SEMRUSH.COM_CLONE",
      deploy_link: "https://sunny-zabaione-bf8058.netlify.app/",
      animation: "fade",
    },
    {
      title: "Project-3",
      poster_url: apolloPoster,
      name: "MAILCHIMP.COM (CLONE)",
      description:
        "This website is clone of Mailchimp and it will guide your business with the right marketing & sales tools. also, this website is fully responsive and five people collaborated on the project, which was finished in five days.",
      tech_stack: [
        <DiReact color="#61DBFB" size="2rem" />,
        <SiChakraui color="teal" size="2rem" />,
        <SiBootstrap color="#563d7c" size="2rem" />,
        <SiJavascript size="2rem" color="#F0DB4F" />,
        <SiCss3 size="2rem" color="#264de4" />,
        <AiFillHtml5 color="#e34c26" size="2rem" />,
      ],
      git_link:
        "https://github.com/shivamsherje/delightful-animal-1301/tree/main/mailchimp",
      deploy_link: "https://rad-semolina-cd66f1.netlify.app/",
      animation: "fade-left",
    },
  ];
  return (
    <Box w={"100%"} className="p-wrapper">
      {projects.map((el, i) => (
        <ProjectCard
          key={el.title}
          i={i + 1}
          poster_url={el.poster_url}
          name={el.name}
          description={el.description}
          tech_stack={el.tech_stack}
          animation={el.animation}
          git_link={el.git_link}
          deploy_link={el.deploy_link}
        />
      ))}
    </Box>
  );
};
const ProjectCard = ({
  poster_url,
  i,
  name,
  description,
  tech_stack,
  git_link,
  deploy_link,
  animation,
}) => {
  const handleGit = (link) => {
    window.open(link);
  };
  const handledeploy = (link) => {
    window.open(link);
  };
  return (
    <div data-aos={`${animation}`} className={`project project${i}`}>
      <div className="poster">
        <img src={poster_url} alt={name} />
      </div>
      <div className="projectDetail">
        <Heading as="h2">{name}</Heading>
        <p>{description}</p>
        <div className="tech">
          <Heading as="h3">Tech Stack:</Heading>
          {tech_stack.map((el) => el)}
        </div>
        <div className="codeLink">
          <div className="deploy" onClick={() => handledeploy(deploy_link)}>
            <p>Live</p>
            <RiExternalLinkLine size="1.5rem" />
          </div>
          <div className="git" onClick={() => handleGit(git_link)}>
            <p>Source Code</p>
            <AiFillGithub size="1.5rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
