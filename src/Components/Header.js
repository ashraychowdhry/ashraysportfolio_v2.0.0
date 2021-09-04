import React from 'react'
import TypedEffect from 'react-typed'
import profilepic from '../Resources/profile-pic.jpg'
import { Link } from "react-scroll";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

import { Document } from 'react-pdf'

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
                     
                        <div className='row'>

                                <div className='header-icon row'>
                                    <a className="icon-item row justify-content-center" href='./Ashray_Chowdhry_Resume.pdf' download>
                                        <FontAwesomeIcon icon={faFile}/> <span className="sr-only icon-styler">(current)</span>
                                        <p className='text-styler'>Resume</p>
                                    </a>

                                </div>
                                <div className='horizontal-spacer'></div>
                                <div className='header-icon row'>
                                    <a className="icon-item row justify-content-center" href='https://github.com/ashraychowdhry' >
                                        <FontAwesomeIcon icon={faGithubSquare}/> <span className="sr-only icon-styler">(current)</span>
                                        <p className='text-styler'>Github</p>
                                    </a>
                                </div>
                                <div className='horizontal-spacer'></div>
                                <div className='header-icon row'>
                                <a className="icon-item row justify-content-center" href='https://linkedin.com/in/ashraychowdhry' >
                                        <FontAwesomeIcon icon={faLinkedin}/> <span className="sr-only icon-styler">(current)</span>
                                        <p className='text-styler'>LinkedIn</p>
                                    </a>
                                </div>
                        </div>
                    
                    

                    <Link smooth={true} to='about' offset={0} className="get-started-button" href="/about">About Me</Link>
                </div>
            </div>
        </>
        
    )
}
    

export default Header
