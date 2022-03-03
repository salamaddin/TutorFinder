import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
import { NavLink } from "react-router-dom";
import { UserContext } from "./App";
import { useContext} from "react";

export default function Nav() {
  const {state, dispatch} = useContext(UserContext);

  const RenderManu = () => {
    if(state){
      return(
        <>
          
    <nav className={classes.nav}>
      <ul>
        <li>
        <NavLink to="/home" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Salam</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
         
        </li>
        <li>
        <NavLink to="/logout">
            Logout
          </NavLink>
        </li>

      </ul>
      <Account />
    </nav>
        </>
      )
    }else{
      return(
      <>
        console.log(state);
    <nav className={classes.nav}>
      <ul>
        <li>
        <NavLink to="/home" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Salam</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
         
        </li>
        <li>
        <NavLink to="/login">
            Login
          </NavLink>
        </li>

        <li>
        <NavLink to="/logout">
            Logout
          </NavLink>
        </li>


      </ul>
      <Account />
    </nav>
      </>
      )
    }
  }
  return (
    <RenderManu>
    </RenderManu>
  );
}
