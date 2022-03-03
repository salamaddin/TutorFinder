import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const  About = () => {

  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const callAboutPage = async() => {
    try{
        const res = await fetch('/about',{
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type" : "application/json"
        },
        credentials: "include"
    });

    const data = await res.json();
    setUserData(data);
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
    callAboutPage();
  },[]);


    return (
      <>
        <h1>About</h1>
        <div>

          <form method="GET">
            <div>
              Name
            </div>
          
            <div id="name">
            <p>{userData.name}</p>
            </div>

            <div>
              Email
            </div>
          
            <div id='email'>
            {userData.email}
            </div>
          </form>

        </div>
        
      </>
    );
  }
   export default About;