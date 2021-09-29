import React from 'react'
import "../../App.css";
import InputField from '../../components/inputField';
import Container from '../../components/Container';
import Button from '../../components/Button';


function index() {
    return (
     <Container>
<section className="input-section">
    <h1 className="input-heading">
        Log in
    </h1>
    <form>
    <InputField  name="email" labelClass="label-class" labelName='Email Address' inputClass="input-class"
    place="e.g janedoe@gmail.com"/>
    <InputField  name="password" labelClass="label-class" labelName='password' type="password" inputClass="input-class"
    place="Minimum of 8 characters." img/>

<article className="center">


<Button btnClass="btn-primary"> Log in</Button>



<p>
Don’t have an account?  <span> Sign up here </span>
</p>
<p>
Forgot Password?
</p>

<h1>
OR
</h1>


<Button btnClass="btn-outline btn-flex" img> Sign in with Google</Button>



</article>


    </form>

    
</section>


     </Container>
    )
}

export default index
