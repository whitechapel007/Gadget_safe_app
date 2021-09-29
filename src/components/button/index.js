import React from 'react'
import './style.css';
import google from "./google.svg"

function Button({ children, btnClass ,img}) {
    return ( 
    <>
        <button className={btnClass} >{ children }
         { img ? <img src={google} className="icon" alt=""/> : null}
        </button>
    </>
    )
}

export default Button