import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'

function Skills() {
    return (
        <>
            <div id='skills' className='skills main-font'>
                <h1 className='py-5'>Skills</h1>
                <div className='container'>
                    <div className='row'>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faDesktop} size='2x' /></div>
                                <h3>Object Oriented</h3>
                                <p>Java, Python, C++</p>
                            </div>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faFileCode} size='2x' /></div>
                                <h3>Data Structures</h3>
                                <p>Java, Python, C, C++</p>
                            </div>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faFacebookF} size='2x' /></div>
                                <h3>Frontend </h3>
                                <p>ReactJS, JavaScript, HTML, CSS, Bootstrap</p>
                            </div>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faGoogle} size='2x' /></div>
                                <h3>Backend</h3>
                                <p>Node.js, Express, Java, Python Flask</p>
                            </div>
                        </div>

                    </div>

                    <div className='row'>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faDesktop} size='2x' /></div>
                                <h3>Database</h3>
                                <p>mySQL, MongoDB</p>
                            </div>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faFileCode} size='2x' /></div>
                                <h3>Data Science</h3>
                                <p>Python (Numpy, Pandas), Apache Spark, SQL</p>
                            </div>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faFacebookF} size='2x' /></div>
                                <h3>Machine Learning</h3>
                                <p>Tensorflow, PyTorch</p>
                            </div>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faGoogle} size='2x' /></div>
                                <h3>Robotics</h3>
                                <p>Arduino, Raspberry Pi, Autonomous Design, AutoCAD, Circuit Design</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
