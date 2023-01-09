import {AiFillLinkedin , AiFillGithub } from 'react-icons/ai'
import { SiGmail} from 'react-icons/si'
import {IoMdCall} from 'react-icons/io'
import { IconContext } from "react-icons";
import './contact.style.css';
import { Box, Heading } from '@chakra-ui/react';

const Contact = () => {
    return (
        <Box w={"100%"} className="c-wrapper">
                <p className='c-caption'>My inbox is always open, whether you have a question <p> or </p> just want to know me or even just to say hi... </p>
            <div className="c-container">
                <div className="contact_left">
                    <Heading as="h2">Contact Me</Heading>
                    <div className="contact-i" onClick={()=>{window.open('https://github.com/deepakkumarfathkar')}}>
                        <AiFillGithub size='1.5rem'  />
                        <p> Deepak Kumar Fathkar</p>
                    </div>
                    <div className="contact-i" onClick={()=>{
                             window.open('https://www.linkedin.com/in/deepak-kumar-fathkar-b1678b13b/')
                        }}>
                        <AiFillLinkedin size='1.5rem'  />
                        <p>Deepak . </p>
                    </div>
                    <div className="contact-i" onClick={()=>{
                            window.open('https://mail.google.com/mail/u/2/#inbox')
                        }}>
                        <SiGmail size='1.5rem'  />
                        <p>deepak.fathkar@gmail.com</p>
                    </div>
                    <div className="contact-i">
                        <IoMdCall size='1.5rem'  />
                        <p>+91 8763999124</p>
                    </div>
                </div>
                {/* <div className="contact_right">
                    <form action="">
                        <fieldset>
                            <legend>Email</legend>
                            <input type="email" name="" id="" />
                        </fieldset>
                        <fieldset>
                            <legend>Subject</legend>
                            <input type="text" name="" id="" />
                        </fieldset>
                        <fieldset>
                            <legend>Message</legend>
                            <input type="text" name="" id="" />
                        </fieldset>
                        <input type="submit" value='Submit'  />
                    </form>

                </div> */}
            </div>
            
        </Box>
    )
}
export default Contact;