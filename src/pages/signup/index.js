import React from 'react'
import image1 from "../../components/images/hand.svg"
import image2 from "../../components/images/hand2.svg"
import "../../App.css";
import {Label} from "../../components/inputField/index"
import InputField from '../../components/inputField';


function index() {
    return (
        <div className="container">

        <div className="div-1">
            <img src={image1} alt="" className="img-1" />
        </div>

        <section className="input-section">
<h1 className="input-heading">
Sign up with <span> GadgetSafe </span> 
</h1>
<p className="input-paragraph">
Get started and access our gadget insurance and loan services at a go
</p>
<form action="" method="post">

<Label labelClass="label-class" name="firstName">First Name</Label>

<InputField  name="firstName" inputClass="input-class"/>

</form>
        </section>

        <div className="div-2">    
<img src={image2} alt="" className="img-2" />
        </div>

        </div>
    )
}

export default index
