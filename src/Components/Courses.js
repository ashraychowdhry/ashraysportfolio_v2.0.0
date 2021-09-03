import React from 'react'
import CourseCard from '../Helper/CourseCard'

export default function Courses() {
    return (
        <div className='courses-wrapper main-font'>
            <div className='courses-header'>
                <h1 className='text-uppercase text-center py-5'>Courses</h1>
            </div>
            
            <h3 className='text-uppercase text-center py-1 courses-semester-header'>Fall 2021</h3>
            <div className='row '>
                
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='CS3790 - Cognitive Science' details='testing details' />
                    <CourseCard summary='CS3510 - Algorithms' details='testing details' />
                    <CourseCard summary='CS3250 - Computer Networking' details='testing details' />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='MGT4803 - FinTech and Cryptocurrencies' details='testing details' />
                    <CourseCard summary='PHIL3101 - Political Philosophy' details='testing details' />
                    <CourseCard summary='CS4883 - CREATE-X Capstone' details='testing details' />
                </div>
                
            </div>

            <h3 className='text-uppercase text-center py-1 courses-semester-header'>Spring 2021</h3>
            <div className='row '>
                
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='CS2200 - Systems and Networks' details='testing details' />
                    <CourseCard summary='CS4641 - Machine Learning' details='testing details' />
                    <CourseCard summary='MGT4073 - Financial Modelling' details='testing details' />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='ISYE3770 - Statistics and Applications' details='testing details' />
                    <CourseCard summary='MGT4067 - Financial Markets Trading and Structure' details='testing details' />
                </div>
                
            </div>

            <h3 className='text-uppercase text-center py-1 courses-semester-header'>Fall 2020</h3>
            <div className='row '>
                
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='CS2110 - Computer Organization and Programming' details='testing details' />
                    <CourseCard summary='CS3600 - Introduction to Artificial Intelligence' details='testing details' />
                    <CourseCard summary='CS4400 - Introduction to Database Design' details='testing details' />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='MATH3012 - Applied Combinatorics' details='testing details' />
                    <CourseCard summary='MGT3078 - Finance and Investments' details='testing details' />
                    <CourseCard summary='ME4699 - Undergraduate Research' details='testing details' />
                </div>
                
            </div>


            <h3 className='text-uppercase text-center py-1 courses-semester-header'>Spring 2020</h3>
            <div className='row '>
                
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='ACCT2101 - Accounting I' details='testing details' />
                    <CourseCard summary='CS1332 - Data Structures and Algorithms' details='testing details' />
                    <CourseCard summary='CS2050 - Introduction to Discrete Mathematics' details='testing details' />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='ECON2106 - Principles of Microeconomics' details='testing details' />
                    <CourseCard summary='CS2340 - Objects and Design' details='testing details' />
                    <CourseCard summary='ME2699 - Undergraduate Research' details='testing details' />
                </div>
                
            </div>

            <h3 className='text-uppercase text-center py-1 courses-semester-header'>Fall 2019</h3>
            <div className='row '>
                
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='APPH1040 - Science and Foundation of Health' details='testing details' />
                    <CourseCard summary='CS1100 - Freshman Leap Seminar' details='testing details' />
                    <CourseCard summary='CS1331 - Introduction to Object Oriented Programming' details='testing details' />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    <CourseCard summary='ENGL1102 - English Composition II' details='testing details' />
                    <CourseCard summary='MATH1554 - Linear Algebra' details='testing details' />
                    <CourseCard summary='PSYC1101 - General Psychology' details='testing details' />
                </div>
                
            </div>
        </div>
        
    )
}
