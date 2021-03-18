import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import gtechlogo from '../Resources/georgia-tech-logo.png'
import gtechsign from '../Resources/georgia-tech-sign.jpg'


export default function TestimonialCarousel() {
    return (
        <div className='main-font'>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                autoPlay={true}
                showStatus={false}
                interval={3000}
            >
                <>
                    <img className='carousel-img' src={gtechlogo} alt='carousel' />
                    <div className='carousel-text'>
                        <h3>Carousel 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat.</p>
                    </div>
                </>
                <>
                    <img className='carousel-img' src={gtechsign} alt='carousel2' />
                    <div className='carousel-text'>
                        <h3>Carousel 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat.</p>
                    </div>
                </>
                <>
                    <img className='carousel-img' src={gtechlogo} alt='carousel3' />
                    <div className='carousel-text'>
                        <h3>Carousel 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                                aliquip ex ea commodo consequat.</p>
                    </div>
                </>
            </Carousel>
        </div>
    )
}
