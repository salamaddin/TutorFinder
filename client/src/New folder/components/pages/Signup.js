import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Signup() {

  const [user,setUser] = useState([{
    name:'', email:'',password:'', cpassword:'' 
  }]);

  const navigate = useNavigate();
 
  const handleInputs = (e) => {
    setUser({...user, [e.target.name]:e.target.value});
  };

  const postData = async (e) => {
    e.preventDefault();
    const {name, email,password, cpassword} = user;

    const res = await fetch('/register',{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email,password, cpassword
      }),
    });

    const data = await res.json();
    if(res.status === 422 || !data){
      window.alert("Invalid Registration");
    }else{
      window.alert("Registration sucessfull");
      navigate('/login')
    }

  };
 

  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`} method='POST'>

          <TextInput type="text" 
          value={user.name}
           onChange={handleInputs}
          // onChange={(e) => setUsername(e.target.value)}
          name="name"
          placeholder="Enter name"
           icon="person" />

          <TextInput
            type="text"
           value={user.email}
           onChange={handleInputs}
           name="email"
           placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" 
          value={user.password}
          onChange={handleInputs}
          placeholder="Enter password"
          name="password"
           icon="lock" />

          <TextInput
            type="password"
            value={user.cpassword}
            onChange={handleInputs}
            placeholder="Confirm password"
            name="cpassword"
            icon="lock_clock"
          />

          <Checkbox text="I agree to the Terms &amp; Conditions" />

          <Button onClick={postData} >
            <span >Submit Now</span>
          </Button>

          <div className="info">
            Already have an account? <NavLink to="/login">Login</NavLink> instead.
          </div>

          <input type='submit' name="signup"
          
          value='register' onClick={postData} />
          
        </Form>
      </div>
    </>
  );
}
