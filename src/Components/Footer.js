import { Link } from "react-scroll";
import React from 'react'
import { FacebookShareButton, FacebookIcon, TwitterIcon, TwitterShareButton, LinkedinShareButton, LinkedinIcon } from "react-share";

export default function Footer() {
    return (
       <>
        <div className='footer-wrapper main-font'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='d-flex'>
                            <p>Address: 955 Spring St. NW, Atlanta GA 30309</p>
                        </div>
                        <div className='d-flex'>
                            <a href='tel:609-937-9394'>Phone: +1(609)-937-9394</a>
                        </div>
                        <div className='d-flex'>
                            <a href='mailto: ashraychowdhry@gmail.com'>Email: ashraychowdhry@gmail.com</a>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <div className='col'>
                                <Link smooth={true} to='home' className="nav-link footer-nav footer-link" href="#home">Home</Link>
                                
                                <Link smooth={true} to='about' className="nav-link footer-nav footer-link" href="#about">About</Link>
                                
                                <Link smooth={true} to='skills' className="nav-link footer-link" href="#skills">Skills</Link>
                                
                                <Link smooth={true} to='experience' className="nav-link footer-link" href="#experience">Experience</Link>
                                
                            </div>
                            

                            <div className='col'>
                            
                                <Link smooth={true} to='portfolio' className="nav-link footer-link" href="#portfolio">Portfolio</Link>
                                
                                <Link smooth={true} to='courses' className="nav-link footer-link" href="#courses">Courses</Link>
                                
                                <Link smooth={true} to='extracurriculars' className="nav-link footer-link" href="#extracurriculars">Extracurriculars</Link>
                                
                                <Link smooth={true} to='contacts' className="nav-link footer-link" href="#contacts">Contact Me</Link>
                                
                            </div>

                            <div className='col align-items-center'>
                                <div className='d-flex justify-content-center'>
                                    <FacebookShareButton url={"ashraychowdhry.com"} quote={"Check out this developer!"} hashtag="#tech"> 
                                        <FacebookIcon className='mx-3' size={30}/>
                                    </FacebookShareButton>
                                    <TwitterShareButton url={"ashraychowdhry.com"} quote={"Check out this developer!"} hashtag="#tech"> 
                                        <TwitterIcon className='mx-3' size={30}/>
                                    </TwitterShareButton>
                                    <LinkedinShareButton url={"ashraychowdhry.com"} quote={"Check out this developer!"} hashtag="#tech"> 
                                        <LinkedinIcon className='mx-3' size={30}/>
                                    </LinkedinShareButton>
                                    
                                </div>
                                <p className='pt-3 text-center'>
                                        Copyright&copy;
                                    {   new Date().getFullYear()} &nbsp;Ashray Chowdhry | All Rights Reserved
                                    </p>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}
