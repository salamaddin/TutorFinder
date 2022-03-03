import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Contact from "./pages/contact";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import About from "./pages/About";
import { Logout } from "./pages/logout";
import React,{createContext, useReducer} from "react";
import { initialState, reducer } from "../../reducer/useReducer";
import Nav from "./Nav";

export const UserContext = createContext();
 

const Routing = () =>{
  return(
    <BrowserRouter> 
    <Layout>   
     <Routes>
       <Route path="/" element={<Navigate to="/home" />} />
         <Route path='/home' element={<Home />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='/login' element={<Login />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/about' element={<About />} />
         <Route path='/logout' element={<Logout />} />   
       </Routes>
    </Layout>
 </BrowserRouter>
  )
}


function App2() {
  const [state,dispatch] = useReducer(reducer, initialState);
  return (

  <>
      <UserContext.Provider value={state, dispatch}>
       <Routing/>
      </UserContext.Provider>
  </>
  
  );
}
export default App2;
