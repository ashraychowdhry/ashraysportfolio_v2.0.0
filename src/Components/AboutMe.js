import React from 'react'
import gtechlogo from '../Resources/georgia-tech-logo.png'
import gtechsign from '../Resources/georgia-tech-sign.jpg'

function AboutMe() {
    return (
        <>
            <div id='about' className='about-me-wrapper'>

                <div className='container py-5'>
                    <h2 className='about-header main-font'>Background</h2>
                    <div className='row about-text main-font'>

                        I am a senior at the Georgia Institute of Technology pursuing a B. S. in Computer Science from the College of Computing, 
                        and a certification in Finance from Scheller Business School. I am concentrating in Artificial Intelligence and Database/
                        Network Design, with an expected graduation date of May 2022. I have worked on a variety of projects, gaining experience in areas such as responsive web development, 
                        predictive modeling with data handling, and machine automation.
                    </div>
                    <div className='spacer'></div>
                    <div className='row about-text main-font'>
                        During my time as a student, I have been very active in pursuing research. As a junior, I co-authored an original publication to the IEEE Systems Journal paper for the development of a novel systems
                        engineering resilience metric and corresponding simulation software as a part of the Sustainable Design Laboratory. Because of the paper's positive reception,
                        I am currently designing a follow-up web tool that allows systems engineers to make use of the tool.
                    </div>
                    <div className='spacer'></div>
                    <div className='row about-text main-font'>
                        In addition to research, I have experience working in several professional environments, which have allowed me to develop a variety
                        of skills. My past experiences with full-stack development and application design, as well as with data analytics and predictive modeling
                        allow me to adapt flexibly to situations and innovative tasks. During my time at Capital One, I worked full-stack to develop a 
                        novel platform that digitized major financial planning services, building a professional-scale service. And with my past work on a team 
                        at John Deere Financial, I was able to design a predictive model that improved prediction accuracy by over 
                        15% and provided insight into customer churn and buying trends. Along with the model development and training, I worked with source control 
                        and documentation tools to assist with future member onboarding, and helped transition the project into production. And through my past 
                        research at Rutgers University for manufacturing automation and cybersecurity, I worked extensively in group settings to compile 
                        literature and analyze security threats to production systems.
                    </div>
                    
                </div>
            </div>
        </>
        
    )
}

export default AboutMe
