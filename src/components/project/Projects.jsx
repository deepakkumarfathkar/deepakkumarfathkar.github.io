import './projects.style.css';
import Aos from 'aos'
import "aos/dist/aos.css";
import kindmealPoster from './port.png';
import lifestylePoster from './port.png';
import apolloPoster from './port.png';
import {SiBootstrap , SiChakraui , SiJavascript , SiCss3} from 'react-icons/si'
import {DiReact} from 'react-icons/di'
import {AiFillHtml5 , AiFillGithub} from 'react-icons/ai';
import {RiExternalLinkLine} from 'react-icons/ri'
import { useEffect } from 'react';

const Projects = () => {
  useEffect(()=>{
    Aos.init({duration:3000 })
})
  const projects =[
    {
      title:"Project-1",
      poster_url:kindmealPoster,
      name:"NORDSTORM.COM (CLONE)",
      description:"NORDSTORM is a online shoping website where you can purchase or sell products like cloths, bueaty, and other accesory. Lifestyle's inventory consists of several national and international brands, and its product categories include Indian and western apparels, footwear, handbags, beauty products, and fashion accessories for men, women, and children.",
      tech_stack:[<DiReact color='#61DBFB' size='2rem' /> , <SiChakraui color='teal' size='2rem' /> , <SiBootstrap color='#563d7c' size='2rem' /> ,<SiJavascript size='2rem' color='#F0DB4F' /> , <SiCss3 size='2rem' color='#264de4' />
      , <AiFillHtml5 color='#e34c26' size='2rem'/>],
      git_link:'https://dreamlaza-shopper.netlify.app/',
      deploy_link:'',
      animation:'fade-right'
    },
    {
      title:"Project-2",
      poster_url:lifestylePoster,
      name:"NORDSTORM.COM (CLONE)",
      description:"NORDSTORM is a online shoping website where you can purchase or sell products like cloths, bueaty, and other accesory. Lifestyle's inventory consists of several national and international brands, and its product categories include Indian and western apparels, footwear, handbags, beauty products, and fashion accessories for men, women, and children.",
      tech_stack:[<SiJavascript size='2rem' color='#F0DB4F' /> , <SiBootstrap color='#563d7c' size='2rem' /> , <SiCss3 size='2rem' color='#264de4' />
      , <AiFillHtml5 color='#e34c26' size='2rem'/>],
      git_link:'https://github.com/deepakkumarfathkar/Dreamlaza-Shopper',
      deploy_link:'https://dreamlaza-shopper.netlify.app/',
      animation:'fade'
    },
    {
      title:"Project-3",
      poster_url:apolloPoster,
      name:"NORDSTORM.COM (CLONE)",
      description:"NORDSTORM is a online shoping website where you can purchase or sell products like cloths, bueaty, and other accesory. Lifestyle's inventory consists of several national and international brands, and its product categories include Indian and western apparels, footwear, handbags, beauty products, and fashion accessories for men, women, and children.",
      tech_stack:[<SiJavascript size='2rem' color='#F0DB4F' /> , <SiBootstrap color='#563d7c' size='2rem' /> , <SiCss3 size='2rem' color='#264de4' />
      , <AiFillHtml5 color='#e34c26' size='2rem'/>],
      git_link:'https://github.com/deepakkumarfathkar/Dreamlaza-Shopper',
      deploy_link:'https://dreamlaza-shopper.netlify.app/',
      animation:'fade-left'
    },

  ]
  return (
    <div className="p-wrapper" >
      {
        projects.map((el,i )=>
          <ProjectCard key={el.title} i={i+1} poster_url={el.poster_url} name={el.name} description={el.description} tech_stack={el.tech_stack} animation={el.animation} git_link={el.git_link} deploy_link={el.deploy_link}  />
        )
      }
    </div>
  )
}
const ProjectCard = ({poster_url,i,name,description,tech_stack ,git_link, deploy_link,animation})=>{
  const handleGit = (link) =>{
    window.open(link)
  }
  const handledeploy = (link) =>{
    window.open(link)
  }
  return (
    <div data-aos={`${animation}`} className={`project project${i}`} >
      <div className="poster"  >
        <img src={poster_url} alt={name} />
      </div>
      <div className="projectDetail">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="tech">
          <h3>Tech Stack:</h3>
          {
            tech_stack.map(el=> el )
          }
        </div>
        <div className="codeLink">
          <div className="deploy" onClick={()=>handledeploy(deploy_link)}>
           <p>Live</p> 
            <RiExternalLinkLine size='1.5rem'/>
          </div>
          <div className="git" onClick={()=>handleGit(git_link)} >
           <p>Source Code</p> 
            <AiFillGithub size='1.5rem'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;