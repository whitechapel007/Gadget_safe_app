import React from 'react'
import "../../App.css";
import InputField from '../../components/inputField';
import Firsthand from "../../components/firsthand"
import Secondhand from "../../components/secondhand"
import Container from '../../components/Container';

function index() {
    return (
        <Container>
            <section className="input-section">
                    <h1 className="input-heading"> Sign up with <span> GadgetSafe </span> </h1>
                    <p className="input-paragraph"> Get started and access our gadget insurance and loan services at a go</p>
                    <form>
                        <InputField  name="firstName" labelClass="label-class" labelName='First Name' inputClass="input-class"/>
                         <InputField name="LastName" labelClass="label-class" labelName='Last Name' inputClass="input-class"/>
                    </form>
                </section>
        </Container>
    )
}

export default index