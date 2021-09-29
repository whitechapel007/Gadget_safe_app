import React from 'react'
import "./style.css"
import eye from "./eye.svg"

function InputField({ name, type, inputClass, placeHolder, img, labelClass, labelName}) {
    return ( 
    <>
    <label htmlFor={labelName} className={labelClass} >{labelName}</label>
    <div className="input-form">
        <input 
            type={type}
            name={name}
            className={inputClass} 
            placeholder={placeHolder}
        />
        {img &&  <img src={eye} alt="img-eye" className="eye" /> }
    </div>
    </>
    )
}

export default InputField
