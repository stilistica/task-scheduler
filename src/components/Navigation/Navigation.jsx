import s from './Navigation.module.css'
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../redux/auth/selectors.js";
import {NavLink} from "react-router-dom";

function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <NavLink className={s.link} to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={s.link} to="/tasks">
                    Tasks
                </NavLink>
            )}
        </nav>
    );
}

export default Navigation;