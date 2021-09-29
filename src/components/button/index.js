import React from 'react'
import './style.css';
import google from "./google.svg"

function Button({ img, children, btnClass, icon}) {
    return ( 
    <div className="flex item-center">
        <button className={btnClass} >{ children }
           { img && <img src={google} className="icon" alt=""/>}
        </button>
    </div>
    )
}

export default Button