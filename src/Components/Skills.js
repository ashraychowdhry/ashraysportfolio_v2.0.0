import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode, faCloud, faServer, faDatabase, faChartLine, faBrain, faRobot } from '@fortawesome/free-solid-svg-icons'

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
                                <p>Java, Python, C++, C, JavaScript</p>
                            </div>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faCloud} size='2x' /></div>
                                <h3>Cloud</h3>
                                <p>AWS, Java, Python</p>
                            </div>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faFileCode} size='2x' /></div>
                                <h3>Frontend </h3>
                                <p>ReactJS, JavaScript, HTML, CSS, Bootstrap</p>
                            </div>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faServer} size='2x' /></div>
                                <h3>Backend</h3>
                                <p>Node.js, Express, Java, Python Flask</p>
                            </div>
                        </div>

                    </div>

                    <div className='row'>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faDatabase} size='2x' /></div>
                                <h3>Database</h3>
                                <p>mySQL, MongoDB, PostgreSQL</p>
                            </div>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faChartLine} size='2x' /></div>
                                <h3>Data Science</h3>
                                <p>Python (Numpy, Pandas), Apache Spark, SQL</p>
                            </div>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faBrain} size='2x' /></div>
                                <h3>Machine Learning</h3>
                                <p>Tensorflow, PyTorch</p>
                            </div>
                        </div>

                        <div className='col-md-3 col-sm-6'>
                            <div className='box'>
                                <div className='circle'><FontAwesomeIcon className='service-icon' icon={faRobot} size='2x' /></div>
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
