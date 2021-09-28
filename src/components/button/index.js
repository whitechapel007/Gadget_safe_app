import React from 'react'
import './style.css';
import google from "./google.svg"

function Button({ children, btnClass, icon}) {
    return ( 
    <div>
        <button className={btnClass} >{ children }
            <img src={google} className="icon" alt=""/>
        </button>
    </div>
    )
}

export default Button