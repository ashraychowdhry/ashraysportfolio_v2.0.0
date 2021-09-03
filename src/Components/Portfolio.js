import React from 'react'
import splitway from '../Resources/splitway_home.jpg'
import ashraychowdhryweb from '../Resources/ashraychowdhrywebsite.jpg'
import foodsplash from '../Resources/foodsplash_home.jpg'
import ENATool from '../Resources/ENATool.jpg'
import cryptobot from '../Resources/cryptobotpic.png'
import {openPopupBox, getConfig} from '../Helper/PortfolioPopUps.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {PopupboxManager, PopupboxContainer} from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

function Portfolio() {

    const openSplitwayPopupBox = () => {
        const content = (
            <div className='popup-wrapper'>
                <img src={splitway} className='portfolio-popup-image' alt='College Travel Service Tool'/>
                <p>This platform was designed with Bootstrap, JavaScript, mySQL Alchemy, and Python Flask to help assist college students 
                    find people to rideshare with to local events. By using the Google Maps API to intelligently locate convenient events nearby,
                    users socially interact with postings and create their own to pair people together.</p>
                    <b>Github: </b> <a className='hyperlink' onClick={() =>window.open('https://github.com/ashraychowdhry/splitway')}>https://github.com/ashraychowdhry/splitway</a>
            </div>

        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "SPLITWAY",
              },
            },
          });
         

    }

    const openFoodSplashPopupBox = () => {
        const content = (
            <div className='popup-wrapper'>
                <img src={foodsplash} className='portfolio-popup-image' alt='Food Donation Platform'/>
                <p>This online website platform allows donors in a community to easily filter out and commit to donation 
                    events nearby that satisfy their donation requirements. Users can log in, create listings, and 
                    use convenient and specialized filters to find charity events in their area that best suit their product.
                    Users then can commit to these events through the platform, allowing organizations to get better insight into
                    expected donations. made with Djanjo (Python), JavaScript, HTML.</p>
                    <b>Github: </b> <a className='hyperlink' onClick={() =>window.open('https://github.com/ashraychowdhry/foodsplash')}>https://github.com/ashraychowdhry/foodsplash</a>
            </div>

        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "FOODSPLASH",
              },
            },
          });
          
        

    }

    const openACWPopupBox = () => {
        const content = (
            <div className='popup-wrapper'>
                <img src={ashraychowdhryweb} className='portfolio-popup-image' alt='Personal Portfolio Website'/>
                <p>This personal portfolio website! Made with ReactJS, Bootstrap, and JQuery (JavaScript, CSS, and HTML), 
                    this lightweight website focuses on a readable and artistic way of presenting my professional experience.</p>
                    <b>Github: </b> <a className='hyperlink' onClick={() =>window.open('https://github.com/ashraychowdhry/ashraysportfolio')}>https://github.com/ashraychowdhry/ashraysportfolio</a>
            </div>

        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "PORTFOLIO WEBSITE",
              },
            },
          });
          
        

    }

    const openENAPopupBox = () => {
        const content = (
            <div className='popup-wrapper'>
                <img src={ENATool} className='portfolio-popup-image' alt='Ecological Network Analysis Systems Analyser'/>
                <p>This website aims to make the findings of my recently co-authored publication accessible to the public. 
                    The platoform streamlines calculations of several Ecological Network Analysis metrics in order to provide 
                    recommendations to systems engineers for resilience improvement. Made with ReactJS, NodeJS, and ExpressJS.</p>
                    <b>Github: </b> <a className='hyperlink' onClick={() =>window.open('https://github.com/ashraychowdhry/SystemsENAMetricAnalyzer')}>https://github.com/ashraychowdhry/SystemsENAMetricAnalyzer</a>
            </div>

        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "ECOLOGICAL NETWORK ANALYZER",
              },
            },
          });
          
        

    }

    const openCryptobotPopupBox = () => {
        const content = (
            <div className='popup-wrapper'>
                <img src={cryptobot} className='portfolio-popup-image' alt='Cryptocurrency Trading Bot'/>
                <p>This project is an automated bot used on both Coinbase Pro and Binance.us in order to algorithmically trade 
                    a variety of cryptocurrencies. This is currently fully functional, and upcoming improvements are being developed
                    to incorporate machine learning techniques.
                </p>
                    <b>Github: </b> <a className='hyperlink' onClick={() =>window.open('https://github.com/ashraychowdhry/cryptocurrencybot')}>https://github.com/ashraychowdhry/cryptocurrencybot</a>
            </div>

        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "ALGORITHMIC CRYPTOCURRENCY TRADING BOT",
              },
            },
          });
          
        

    }

    

    const SplitWay = {
        img_src: splitway, 
        img_alt: 'Algorithmic Cryptocurrency Trading Bot', 
        description: 'This bot trades across multiple cryptocurrency exchanges', 
        hyper_link: 'https://github.com/ashraychowdhry/splitway'
    }

    const configPopup = {
        titleBar: {
            enable: true,
        },
        fadeIn: true,
        fadeInSpeed: 500

    }

    return (
        <div id='portfolio' className='port-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5 main-font portfolio-header'>
                    Portfolio
                </h1>
                <div className=' image-row-wrap row justify-content-center'>
                    

                        <div className='image-box-wrapper ' onClick={openSplitwayPopupBox}>
                            <img className='portfolio-image' src={splitway} alt='SplitWay' />
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearch} />
                        </div>  

                        <div className='image-box-wrapper' onClick={openFoodSplashPopupBox}>
                            <img className='portfolio-image' src={foodsplash} alt='FoodSplash' />
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearch} />
                        </div>  

                        <div className='image-box-wrapper ' onClick={openCryptobotPopupBox}>
                            <img className='portfolio-image' src={cryptobot} alt='cryptocurrency bot' />
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearch} />
                        </div> 

                        <div className='image-box-wrapper' onClick={openENAPopupBox}>
                            <img className='portfolio-image' src={ENATool} alt='Autonomous Robotic Arm' />
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearch} />
                        </div>  

                        <div className='image-box-wrapper' onClick={openACWPopupBox}>
                            <img className='portfolio-image' src={ashraychowdhryweb} alt='Autonomous Electric Vehicle' />
                            <div className='overflow'></div>
                            <FontAwesomeIcon className='portfolio-icon' icon={faSearch} />
                        </div>  

                    </div>
                    

            </div>
            <PopupboxContainer {...configPopup} />
        </div>
    )
}

export default Portfolio
