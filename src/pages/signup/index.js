import React from 'react'
import "../../App.css";
import {Label} from "../../components/inputField/index"
import InputField from '../../components/inputField';
import Firsthand from "../../components/firsthand"
import Secondhand from "../../components/secondhand"

function index() {
    return (
        <div className="container">
            <Firsthand className="div-1"/>
                <section className="input-section">
                    <h1 className="input-heading"> Sign up with <span> GadgetSafe </span> </h1>
                    <p className="input-paragraph"> Get started and access our gadget insurance and loan services at a go</p>
                    <form>
                        <InputField img name="firstName" labelClass="label-class" labelName='First Name' inputClass="input-class"/>
                    </form>
                </section>
            <Secondhand className="div-2"/>
        </div>
    )
}

export default index
