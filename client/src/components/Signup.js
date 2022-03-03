// import React from 'react';
import signupImage from "../assests/images/signup.svg";

function Signup() {
  return (
   <div style={{color: "red"}}>
     <h1>signup</h1>
     <input type="text" placeholder="Enter name" icon="person" />
     <img src={signupImage} alt="Signup" />
     
   </div>

     );
    }
   

export default Signup;
