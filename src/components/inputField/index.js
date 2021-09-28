import React from 'react'
import "./style.css"
import eye from "./eye.svg"

function InputField({  name, inputClass, img}) {
    return ( <div className="input-form">
        {/* <label htmlFor = { name } className={labelClass} > {Children}</label> */}

     { img ?  <img src={eye} alt="" className="eye" />: null}
        <input type = "text"
        id = { name }
        name = { name }
        className = { inputClass }
        
        />


        </div>
    )
}

export default InputField

export const Label=({children,name,labelClass})=>{
    return(
        <div>
            <label htmlFor={name} className ={labelClass}>{children}</label>
        </div>
    )
}
