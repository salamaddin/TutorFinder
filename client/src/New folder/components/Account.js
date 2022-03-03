import classes from "../styles/Account.module.css";
import { NavLink } from "react-router-dom";

export default function Account() {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <NavLink to="/signup">Signup</NavLink>
      {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}
