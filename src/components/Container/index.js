import React from 'react'
import image2 from "../../images/hand2.svg"
import image1 from '../../images/hand.svg'
import './style.css'


export default function Container({children}) {
    return (
        <div className="container">
            <div className="div-1">
                <img src={image1} alt="" className="img-1" />
            </div>
                {children}
            <div className="div-2">    
                <img src={image2} alt="" className="img-2" />
            </div>
        </div>
    )
}
