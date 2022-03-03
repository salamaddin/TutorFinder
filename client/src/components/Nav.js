 import logo from "../assests/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
// import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
         <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Tutor Finder</h3>
          </a>
        </li>

        <li>
          <p>home</p>
        </li>
        <li>
          <p>About</p>
        </li>
        <li>
          <p>Contact</p>
        </li>
        <li>
          <p>login</p>
        </li>
        

      </ul>

    <div className={classes.account}>
      
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
   

    </div>
    </nav>
  );
}