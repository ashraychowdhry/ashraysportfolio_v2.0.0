import React from 'react'
import TypedEffect from 'react-typed'
import profilepic from '../Resources/profile-pic.jpg'
import { Link } from "react-scroll";



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

                    <Link smooth={true} to='about' offset={0} className="get-started-button" href="/about">About Me</Link>
                </div>
            </div>
        </>
        
    )
}
    

export default Header
