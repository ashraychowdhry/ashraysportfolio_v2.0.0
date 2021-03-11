import React from 'react'
import gtechlogo from '../Resources/georgia-tech-logo.png'
import gtechsign from '../Resources/georgia-tech-sign.jpg'

function AboutMe() {
    return (
        <>
            <div className='about-me-wrapper'>

                <div className='container py-5'>
                <h2 className='about-header main-font'>About Me</h2>
                    <div className='row'>
                        <div className='photo-wrapper col-lg-6 col-xm-12'>
                            <img className='about-pic' src={gtechlogo} alt='temp' />
                        </div>
                        <div className='about-text main-font col-lg-6 col-xm-12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                        </div>
                    </div>

                    <div className='row'>
                        <div className='about-text main-font col-lg-6 col-xm-12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                        </div>
                        <div className='photo-wrapper col-lg-6 col-xm-12'>
                            <img className='about-pic' src={gtechsign} alt='temp' />
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default AboutMe
