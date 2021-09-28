import "./App.css";
import Signup from "./pages/signup"
import Login from "./pages/login"
import ForgotPasword from "./pages/forgot_password";
import ResetPasword from "./pages/reset_password";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from './components/button/index';

function App() {
 
  return(
    <>
    <Router>
      <Switch>
        <Route path="/" component={Signup} />    
        <Route path="/login" component={Login} />    
        <Route path="/forgot_password" component={ForgotPasword} />    
        <Route path="/reset_password" component={ResetPasword} />    
      </Switch>
    </Router>
    </> 
  )
}

export default App;


{/* <Label labelClass="label-class" name="firstName">First Name</Label>
<InputField  name="firstName" inputClass="input-class" img="img">


</InputField> */}