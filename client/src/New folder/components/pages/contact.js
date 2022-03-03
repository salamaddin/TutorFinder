import React from 'react';
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Contact() {

    const [userData, setUserData] = useState({name:'', email:''});
    const [userMassage, setUserMassage] = useState({ message:''});
    const navigate = useNavigate();

    const userContact = async() => {
      try{
          const res = await fetch('contact',{
          method: "GET",
          headers: {
            "Content-Type" : "application/json"
          },
      });
  
      const data = await res.json();
      setUserData({...userData,name:data.name, email:data.email});
       console.log(data.name)
  
      if(!res.status ===200){
        const error = new Error(res.error);
        throw error;
      }
  
      }catch(err){
          console.log(err);
          navigate('/login')
      }
    }
    
  
    useEffect(() => {
      userContact();
    },[]);

  return (
    <>
        <div className='="contact_info'>
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-lg'>
                        <div className='contact_info_title'>
                            Name
                        </div>
                        <div className='contact_info_text'>
                        {userData.name}
                        </div>

                        <div className='contact_info_title'>
                            Email
                        </div>
                        <div className='contact_info_text'>
                            {userData.email}
                        </div>
                        <div className='contact_info_title'>
                            Adress
                        </div>
                        <div className='contact_info_text'>
                            kolkata
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* contact form */}
        <div className='contact_form'>
            <div className='container'>
                <div row>
                    <div className='contact_form'>
                        <div className='contact_form_title'>
                            <form id='contact_form'>
                                <div className='contact_form_name'>
                                    <input type='text' 
                                    id='contact_form_name'
                                    className='contact_form_name'
                                    placeholder='name'
                                    value={userData.name}
                                    required = 'true' />

                                    <input type='email' 
                                    id='contact_form_email'
                                    className='contact_form_name'
                                    placeholder='email'
                                    value={userData.email}
                                    required = 'true' />

                                    <input type='number' 
                                    id='contact_form_phone'
                                    className='contact_form_name'
                                    placeholder='phone'
                                    value={8159928643}
                                    required = 'true' />
                                </div>
                                <div>
                                    <textarea className='text_field' 
                                    id='' placeholder='message'
                                    value={userMassage.message}
                                    onChange={(e) =>setUserData({userMassage: e.target.value})} >
                                    
                                    </textarea>
                                </div>
                                <div className='contact_form_button'>
                                    <button typr="submit" className='button'>send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Contact;
