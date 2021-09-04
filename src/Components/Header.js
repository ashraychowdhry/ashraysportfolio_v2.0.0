import React from 'react'
import TypedEffect from 'react-typed'
import profilepic from '../Resources/profile-pic.jpg'
import { Link } from "react-scroll";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';



function Header() {
    return (
        <>
            <div id='home' className="header-wrapper">
                <div className='main-info main-font'>
                    
                    <img className='profilepic' src={profilepic} alt='Profile Picture'/>
                    <h1>Ashray Chowdhry</h1>
                    <TypedEffect 
                        className='typed-header'
                        strings={['Computer Science Student', 'Web Developer', 'Financial Analyst', 'Data Analyst', 'Machine Learning', 'Database Design', 'Systems and Networks']}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                    {/* 
                        <div className='row'>
                            <ul className="navbar-nav mx-auto">
                                <li className='col-lg-4'>
                                    <Link smooth={true} to='home' offset={0} className="nav-link" href="#">
                                        <FontAwesomeIcon icon={faFile}/> <span className="sr-only">(current)</span>
                                        <p>Resume</p>
                                    </Link>
                                </li>
                                    
                                <li className='col-lg-4'>
                                    <Link smooth={true} to='home' offset={0} className="nav-link" href="#">
                                        <FontAwesomeIcon icon={faGithubSquare}/> <span className="sr-only">(current)</span>
                                        <p>Github</p>
                                    </Link>
                                </li>
                                <li className='col-lg-4'>
                                    <Link smooth={true} to='home' offset={0} className="nav-link" href="#">
                                        <FontAwesomeIcon icon={faLinkedin}/> <span className="sr-only">(current)</span>
                                        <p>LinkedIn</p>
                                    </Link>
                                </li>

                                

                            </ul>
                        </div>
                    */}
                    

                    <Link smooth={true} to='about' offset={0} className="get-started-button" href="/about">About Me</Link>
                </div>
            </div>
        </>
        
    )
}
    

export default Header
