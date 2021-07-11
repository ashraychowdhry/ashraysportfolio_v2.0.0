import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";

function NavBar() {
    return (
        <div>
            

            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            .<div className="container">


            <a className="navbar-brand" href="#">Ashray Chowdhry</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link smooth={true} to='home' offset={0} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
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
                        <Link smooth={true} to='contacts' className="nav-link" href="#contacts">Contacts</Link>
                    </li>
                </ul>
                
            </div>

            </div>

            </nav>


        </div>
    )
}

export default NavBar
