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
                    <img className='carousel-img' src={gtechlogo} alt='Investment Committee' />
                    <div className='carousel-text'>
                        <h3>Senior Portfolio Analyst - GT Investment Committee</h3>
                        <p>The Investments Committee manages the endowment fund for the Georgia Tech Student Foundation, 
                            currently valued at over $2.1 million. Each semester, 2.5% of the portfolio is distributed 
                            to different student organizations on campus. As a Senior Analyst for the committee, I provide equity trends 
                            analysis for portfolio, as well as provide guidance and mentorship to new analysts.
                            I also lead presentations for potential investments utilizing DCFs, relative valuations, and other fundamental analysis.
</p>
                    </div>
                </>
                <>
                    <img className='carousel-img' src={gtechsign} alt='carousel2' />
                    <div className='carousel-text'>
                        <h3>Undergraduate Researcher - GT </h3>
                        <p>The Sustainable Design and Manufacturing (SDM) lab in the George W. Woodruff School of Mechanical Engineering at 
                            Georgia Institute of Technology focuses on the sustainable design of engineered systems. As a researcher in the lab,
                            I assist with the systems engineering team, developing a new theoretical metric based off of ecological network Analysis 
                            In order for artificial systems to be improved on in terms of resilience to unexpected fault. My specific contributions include
                            the full development and maintenance of a systems modelling software used to simulate system faults and calculate resillience,
                            publishing a paper as second author in the IEEE Systems Journal (2021), and 
                             </p>
                    </div>
                </>
            </Carousel>
        </div>
    )
}
