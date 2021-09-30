import React from "react";
import "../../App.css";
import InputField from "../../components/inputField";
import Container from "../../components/Container";
import Button from "../../components/Button";

function index() {
  return (
    <Container>
      <section className="input-section">
        <h1 className="input-heading">
          Sign up with <span> GadgetSafe </span>{" "}
        </h1>
        <p className="input-paragraph">
          Get started and access our gadget insurance and loan services at a go
        </p>
        <form>
          <InputField
            name="firstName"
            labelClass="label-class"
            labelName="First Name"
            inputClass="input-class"
            placeHolder="Enter First Name"
          />
          <InputField
            name="LastName"
            labelClass="label-class"
            labelName="Last Name"
            inputClass="input-class"
            placeHolder="Enter Last Name"
          />
          <InputField
            name="email"
            labelClass="label-class"
            labelName="Email Address"
            inputClass="input-class"
            placeHolder="e.g janedoe@gmail.com "
          />

          <InputField
            name="password"
            labelClass="label-class"
            labelName="password"
            type="password"
            inputClass="input-class"
            placeHolder="Minimum of 8 characters."
            img
          />
          <InputField
            name="confirm-password"
            labelClass="label-class"
            labelName="Confirm Password"
            inputClass="input-class"
            placeHolder="Minimum of 8 characters."
            img
          />
          <article className="center">
            <Button btnClass="btn-primary"> Submit</Button>

            <p>
              Already have an account? <span> Log In here </span>
            </p>

            <h1>OR</h1>

            <Button btnClass="btn-outline btn-flex" img>
              {" "}
              Sign up with Google
            </Button>
          </article>
        </form>
      </section>
    </Container>
  );
}

export default index;
