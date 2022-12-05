// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/skills';
import ProfileComponent from './components/profile/Profile';
import About from './components/about/About';
import Tools from './components/tools/Tools';
import Contact from './components/contact/Contact';
import Projects from './components/project/Projects';
// import GithubCalendar from './components/git_calender/GitCalender';
import Gitstats from './components/git_calender/GitCalender';

function App() {
  return (
    <div className="App">
      {/* <h1 style={{
        textAlign:'center'
      }}>LIFE IS AWESOME....</h1> */}
      <Navbar/>
      <ProfileComponent/>
      <About/> 
      <Skills/>
      <Tools/>
      <Projects/>
      <Contact/>
      <Gitstats/>
    </div>
  );
}

export default App;
