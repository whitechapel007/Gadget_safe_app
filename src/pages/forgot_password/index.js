import React from 'react'
import "../../App.css";
import Container from '../../components/Container'
import InputField from '../../components/inputField'
import Button from './../../components/Button';

export default function ForgetPassword() {
    return (
        <Container>
           <section className="input-section">
                <h1 className="input-heading flex item-center">Forget Password</h1>
                <p className="input-paragraph">Enter your email address to receive reset link.</p>
                <form>
                    <InputField placeHolder="Minimum of 8 Characters" img name="firstName" labelClass="label-class" labelName='Enter New Password' inputClass="input-class"/>
                        <Button children="Submit" btnClass="btn-primary" />
                </form>
            </section>
        </Container>
    )
}
