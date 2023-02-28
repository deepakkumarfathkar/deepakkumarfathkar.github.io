// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/skills';
import ProfileComponent from './components/profile/Profile';
import About from './components/about/About';
import Tools from './components/tools/Tools';
import Contact from './components/contact/Contact';
// import Projects from './components/project/Projects';
// import GithubCalendar from './components/git_calender/GitCalender';
import Gitstats from './components/git_calender/GitCalender';
import { Box } from '@chakra-ui/react';
import Profile1 from './components/profile/Profile1';
import Navbar1 from './components/Navbar';
import Project1 from './components/project/Project1';

function App() {
  return (
    <Box w="100%">
      {/* <Navbar/> */}
      <Navbar1 />
      {/* <ProfileComponent/> */}
      <Profile1 />
      <About/> 
      <Skills/>
      <Tools/>
      {/* <Projects/> */}
      <Project1 />
      <Gitstats/>
      <Contact/>
    </Box>
  );
}

export default App;
