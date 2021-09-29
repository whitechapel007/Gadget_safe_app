import "./App.css";
import Signup from "./pages/signup"
import Login from "./pages/login"
import ForgotPassword from "./pages/forgot_password";
import ResetPassword from "./pages/Reset_password";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
 
  return(
    <>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />    
        <Route path="/forgot_password" component={ForgotPassword} />    
        <Route path="/reset_password" component={ResetPassword} />    
      </Switch>
    </Router>
    </> 
  )
}

export default App;