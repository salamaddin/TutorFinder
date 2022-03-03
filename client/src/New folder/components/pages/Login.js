import classes from "../../styles/Login.module.css";
import classes2 from "../../styles/Button.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../App";

export default function Signup() {  

  const {state, dispatch} = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginuser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin',{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email,password,
      }),
    });

    const data = await res.json();
    if(res.status === 400 || !data){
      window.alert("Invalid Credentials");
    }else{
      
      window.alert("login sucessfull");
      navigate("/");
      dispatch({type:'USER', payload:true})
    }

  };

  return (
    <>
      <h1>Login to your account</h1>

      <div className="column">
        <Illustration />
        <Form method="POST" className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
          />

          <TextInput type="password" 
          placeholder="Enter password"
          value={password} 
          icon="lock" 
          onChange = {(e) => setPassword(e.target.value)} />

          {/* <Button>
            <span>Submit Now</span>
          </Button> */}

        <div className={`${classes2.button} `}>
        <button type='submit' name="login"
          value='Login' onClick={loginuser}
           >
             <span>Submit Now</span>
           </button>
        </div>

          <div className="info">
            Don't have an account? <NavLink to="/signup">Signup</NavLink> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
