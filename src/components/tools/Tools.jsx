import './tools.style.css' ;
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Tools = () =>{
    useEffect(()=>{
        Aos.init({duration:1500 })
    })
const tools = [
    {
        image:'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
        tag:'Git'
    },
    {
        image:'https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png',
        tag:'Git Hub'
    },
    {
        image:'https://avatars.githubusercontent.com/u/54212428?s=280&v=4',
        tag:'Chakra UI'
    },
    // {
    //     image:'https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8',
    //     tag:'Postman'
    // },
    {
        image:'https://miro.medium.com/max/2400/0*BRl-uL7N9LF-1hiD.png',
        tag:'Netlify'
    },
    {
        image:'https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67',
        tag:'Vercel'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFW3JebNu9HSlIO2I_v1D55rXR__xOmcuzzA_OceebkljdNZsc5MmA7RTwaPVVOEHL_Q&usqp=CAU',
        tag:'JSON Server'
    },
    {
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png',
        tag:'NPM'
    },
    // {
    //     image:'',
    //     tag:''
    // },
    
]


    return (
        
        <div className="skills_sections">
            <p>Tools Used</p>
            <div className="cards">
                {
                    tools.map( (tool , i )=>(
                        
                        <ToolsCard i={i+1} link={tool.image} tag={tool.tag} />

                    ))
                }
            </div>
        </div>
    )
}
const ToolsCard= ( {i,link , tag ,  icon ,iconC}) =>{

    return(
        <div data-aos='flip-left' data-aos-anchor-placement='center-center' className={`card card${i} `}>
            
            {
                icon ?iconC :<img src={link} alt={tag}  />
                // iconC
            }
            
            <p>{tag}</p>
        </div>
    )
}

export default Tools