import React from 'react'
import TypedEffect from 'react-typed'


function Header() {
    return (
        <>
            <div className="header-wrapper">
                <div className='main-info'>
                    <h1>Ashray Chowdhry</h1>
                    <TypedEffect 
                        className='typed-header'
                        strings={['Computer Science Student', 'Web Developer', 'Financial Analyst', 'Data Analyst', 'Machine Learning', 'Database Design', 'Systems and Networks']}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />

                    <a href='#' className='get-started-button'>About Me</a>
                </div>
            </div>
        </>
        
    )
}
    

export default Header
