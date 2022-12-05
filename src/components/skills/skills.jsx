import './skills.style.css' ;
import {SiExpress} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Skills = () =>{
    useEffect(()=>{
        Aos.init({duration:1500 })
    })
const skills = [
    {
        image:'https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360',
        tag:'HTML',
        animation:"flip-right",
    },
    {
        image:'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png',
        tag:'CSS',
        animation:"flip-right",
    },
    {
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png',
        tag:'Java Script',
        animation:"flip-right",
    },
    {
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
        tag:'React',
        animation:"flip-right",
    },
    {
        image:'https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png',
        tag:'Redux',
        animation:"flip-right",
    },
    {
        image:'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
        tag:'NodeJS',
        animation:"flip-right",
    },
    {
        image:'https://www.freelogovectors.net/wp-content/uploads/2022/01/express-logo-freelogovectors.net_.png',
        tag:'ExpressJS',
        animation:"flip-right",
    },
    // {
    //     image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png',
    //     tag:'MongoDB',
    //     animation:"flip-right",
    // },
    // {
    //     image:'https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png',
    //     tag:'Git Hub'
    // },
    {
        image:'https://w7.pngwing.com/pngs/125/653/png-transparent-algorithms-data-structures-programs-data-structures-and-algorithms-introduction-to-algorithms-others-miscellaneous-angle-computer-science.png',
        tag:'DS & Algo',
        animation:"flip-right",
    }
    
]


    return (

        <div className="skills_sections skillsbg">
            <p>Skills</p>
            <div className="cards">
                {
                    skills.map((skill , i) =>(
                            <SkillsCard i={i+1} link={skill.image} tag={skill.tag} animation={skill.animation} />
                    )
                    )
                }
            </div>
        </div>
    )
}
const SkillsCard= ( {i,link , tag ,  icon ,iconC , animation}) =>{
    // console.log(props);
    let picture ; 
    if(icon){
        picture =  <SiExpress/>

    }else{
        picture = <img src={link} alt={tag}/>
    }
    return(
        <div data-aos={`${animation}`} className={`card card${i}`}>
            
            {
                icon ?iconC :<img src={link} alt={tag}  />
                // iconC
            }
            
            <p>{tag}</p>
        </div>
    )
}

export default Skills