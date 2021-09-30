import React from "react";
import "../../App.css";
import Container from "../../components/Container";
import InputField from "../../components/inputField";
import Button from "./../../components/Button";

export default function ResetPassword() {
  return (
    <Container>
      <section className="input-section">
        <h1 className="input-heading flex item-center">Reset Password</h1>
        <p className="input-paragraph">Enter new password and verify</p>
        <form>
          <InputField
            placeHolder="Minimum of 8 Characters"
            img
            name="firstName"
            labelClass="label-class"
            labelName="Enter New Password"
            inputClass="input-class"
          />
          <InputField
            img
            placeHolder="Minimum of 8 Characters"
            name="LastName"
            labelClass="label-class"
            labelName="Confirm New Password"
            inputClass="input-class"
          />

          <Button children="Submit" btnClass="btn-primary" />
        </form>
      </section>
    </Container>
  );
}
