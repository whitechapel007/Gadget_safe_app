import React from 'react'
import "./style.css"
import eye from "./eye.svg"

function InputField({ name, inputClass, img, labelClass, labelName}) {
    return ( 
    <>
    <label htmlFor={labelName} className={labelClass} >{labelName}</label>
    <div className="input-form">
        <input 
            type="text"
            name={name}
            className = {inputClass} 
        />
        {img ?  <img src={eye} alt="img-eye" className="eye" /> :  null}
    </div>
    </>
    )
}

export default InputField
