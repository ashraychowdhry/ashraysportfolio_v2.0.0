import React from 'react'
import gtechlogo from '../Resources/georgia-tech-logo.png'
import gtechsign from '../Resources/georgia-tech-sign.jpg'

function AboutMe() {
    return (
        <>
            <div id='about' className='about-me-wrapper'>

                <div className='container py-5'>
                <h2 className='about-header main-font'>About Me</h2>
                    <div className='row'>
                        <div className='photo-wrapper col-lg-6 col-xm-12'>
                            <img className='about-pic' src={gtechlogo} alt='temp' />
                        </div>
                        <div className='about-text main-font col-lg-6 col-xm-12'>

                            As a dedicated Computer Science major at Georgia Tech with a concentration in Artificial Intelligence and Database/Network Design, 
                            I have worked on a variety of projects, gaining experience in areas such as responsive web development, predictive modeling with 
                            data handling, and machine automation.

                            I am currently a senior at the Georgia Institute of Technology, studying Computer Science (B.S.) 
                            with concentrations in Artificial Intelligence, Networking, and Database Design, along with a certification in Finance.

                            

                        </div>
                    </div>

                    <div className='row'>
                        <div className='about-text main-font col-lg-6 col-xm-12'>

                            As a junior, I co-authored an original publication to the IEEE Systems Journal paper for the development of a novel systems
                            engineering resilience metric and corresponding simulation software. 
                            
                            In the summer of my sophomore year, I interned at John Deere Financial as a Data Analyst in the Customer Channel and Analytics team, 
                            developing their customer churn predictive model and streamlining it for production.

                            As a Senior Portfolio Analyst at the Georgia Tech Investments Committee, I've helped lead several teams to conduct equity
                            analysis on university holdings to manage its $1.7 million portfolio.

                            This coming summer, I will be interning at Capital One as a Software Engineer.
                            
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
