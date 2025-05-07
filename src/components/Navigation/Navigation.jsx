import s from './Navigation.module.css'
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../redux/auth/selectors.js";
import {NavLink} from "react-router-dom";
import clsx from "clsx";

function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const setActiveLink = ({ isActive }) => {
        return clsx(s.link, isActive && s.active);
    };

    return (
        <nav>
            <NavLink className={setActiveLink} to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={setActiveLink} to="/tasks">
                    Tasks
                </NavLink>
            )}
        </nav>
    );
}

export default Navigation;