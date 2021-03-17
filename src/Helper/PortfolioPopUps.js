import {PopupboxManager, PopupboxContainer} from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

import React from 'react'

function openPopupBox(img_src, img_alt, description, hyper_link) {
    const content = (
        <>
            <img src={img_src} className='portfolio-popup-image' alt={img_alt}/>
            <p>{description}</p>
            <b><a className='hyperlink' onClick={() =>window.open({hyper_link})}>Github</a></b>
        </>

    )
    PopupboxManager.open({content})

}

function getConfig(title_text) {
    return (
        {
            titleBar: {
                enable: true,
                text: {title_text}
            },
            fadeIn: true,
            fadeInSpeed: 500
        }
        
    )
}

export {
    openPopupBox,
    getConfig
}

