// import logo from './logo1.jpg';
import './navbar.style.css';
import {GiHamburgerMenu} from 'react-icons/gi';
 const Navbar =()=>{
    return(
        <div className="n-wrapper">
            <div className="n-leftSide">
                <div className="logo">
                    {/* <img src={logo}  /> */}
                    <h2>Deepak Kumar Fathkar</h2>
                </div>
            </div>
            <div className="n-rightSide">
                <div className="n-list">
                    <ul>
                        <li>About</li>
                        <li>Exprience</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='hamburger'>
             <GiHamburgerMenu/>
            </div>
        </div>
    )
}
export default Navbar