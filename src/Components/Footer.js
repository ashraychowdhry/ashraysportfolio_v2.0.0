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
                            <p>Address: 930 Spring St. NW, Atlanta GA 30309</p>
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
                                <a className='footer-nav'>Home</a>
                                <br />
                                <a className='footer-nav'>About Me</a>
                                <br />
                                <a className='footer-nav'>Skills</a>
                                <br />
                            </div>

                            <div className='col'>
                                <a className='footer-nav'>How Work</a>
                                <br />
                                <a className='footer-nav'>Portfolio</a>
                                <br />
                                <a className='footer-nav'>Contacts</a>
                                <br />
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
