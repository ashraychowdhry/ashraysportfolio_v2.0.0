import React from 'react'
import TestimonialCarousel from '../Helper/TestimonialCarousel.js'

export default function Testimonials() {
    return (
        <>
            <div className='testimonials-base' id='extracurriculars'>
                <h1 className='text-uppercase text-center py-5 main-font testimonial-header'>Extracurriculars</h1>
                <div className='container'>
                    <div className='testimonial-content-wrapper'>
                        <TestimonialCarousel />
                    </div>
                </div>
            </div>
        </>
    )
}
