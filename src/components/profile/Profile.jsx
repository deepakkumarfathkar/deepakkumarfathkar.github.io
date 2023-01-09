import {AiFillLinkedin , AiFillGithub } from 'react-icons/ai'
import { SiGmail} from 'react-icons/si'
import { IconContext } from "react-icons";
import './Profile.style.css';
import profilePic from './dp.jpg'
import Typist from 'react-typist';
const ProfileComponent = ()=>{
    
    return (
        <div className="profile-wrapper">
            <div className="profile-container">
                <div className="leftBio">
                    <h1>Hi <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/waving-hand_1f44b.png"/> </h1>
                    <h1>I am Deepak Kumar Fathkar</h1>
                    {/* <Typist>
                    </Typist> */}
                    <h1 className='typist' >FullStack Web Developer</h1>
                    <p>An enthusiastic Full Stack Web Developer with a strong set of technical as well as non-technical skills and a dedication towards creating useful and interactive web applications.</p>
                    <div className='resume' onClick={()=>{
                        window.open('https://drive.google.com/file/d/1xJzQsMlHgFG7D14iTEfV_gR0tKKDgBiR/view?usp=share_link')
                    }} > 
                        View Resume
                    </div>
                    {/* <a href="" download='' ></a> */}
                    <div>
                        <IconContext.Provider value={{className:'git-icon'}}>
                            <AiFillGithub size='2rem' onClick={()=>{
                                window.open('https://github.com/deepakkumarfathkar')
                            }} />
                        </IconContext.Provider>
                        <IconContext.Provider value={{className:'linkedin-icon'}}>
                            <AiFillLinkedin size='2rem' onClick={()=>{
                                window.open('https://www.linkedin.com/in/deepak-kumar-fathkar-b1678b13b/')
                            }} />
                        </IconContext.Provider>
                        <IconContext.Provider value={{className:'gmail-icon'}}>
                            <SiGmail size='2rem' onClick={()=>{
                                window.open('https://mail.google.com/mail/u/2/#inbox')
                            }} />
                        </IconContext.Provider>


                    </div>
                    
                </div>
                <div className="rightDP">
                    <div className="formalPicture">
                        <img src={profilePic} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ProfileComponent