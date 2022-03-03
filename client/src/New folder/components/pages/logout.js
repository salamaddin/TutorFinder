import React from 'react';
import { useEffect, useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

export const Logout = () => {

  const {state, dispatch} = useContext(UserContext);
    const navigate = useNavigate();
    const logoutPage = async() => {
      try{
        // dispatch({type:'USER', payload:false});
          const res = await fetch('/logout',{
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type" : "application/json"
          },
          credentials: "include"
      });
      
      if(res.status !==200){
        
        const error = new Error(res.error);
        throw error;
      }
  
      }catch(err){
          console.log(err);
          
      }
    }
    
  
    useEffect(() => {
      logoutPage();
    },[]);
  

  return(
      <>
        <h1>you have successfully loged out</h1>
      </>
    )
};
