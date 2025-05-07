import s from './AuthNav.module.css'
import {NavLink} from "react-router-dom";

function AuthNav() {
    return (
        <div>
            <NavLink to="/register" className={s.link}>
                Register
            </NavLink>
            <NavLink to="/login" className={s.link}>
                Login
            </NavLink>
        </div>
    );
}

export default AuthNav;