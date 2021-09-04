import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";


function NavBar() {
    const [colorChange, setColorChange] = useState(false);

    const changeNavbarColor = () => {
        if  (window.scrollY > 800) {
            setColorChange(true);
        }
        else {
            setColorChange(false);
        }
    };

    window.addEventListener('scroll', changeNavbarColor);
    return (
        <div>
            

            <nav className={colorChange ? 'navbar navbar-expand-lg navbar-light bg-dark fixed-top' : 'navbar navbar-expand-lg navbar-light fixed-top'} >
            <div className="container">


            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link smooth={true} to='home' offset={0} className="nav-link" href="#">
                            <FontAwesomeIcon icon={faHome}/> <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to='about' className="nav-link" href="#about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to='skills' className="nav-link" href="#services">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to='experience' className="nav-link" href="#experience">experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to='portfolio' className="nav-link" href="#portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to='courses' className="nav-link" href="#courses">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to='extracurriculars' className="nav-link" href="#extracurriculars">Extracurriculars</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to='contacts' className="nav-link" href="#contacts">Contact Me</Link>
                    </li>
                </ul>
                
            </div>

            </div>

            </nav>


        </div>
    )
}

export default NavBar
