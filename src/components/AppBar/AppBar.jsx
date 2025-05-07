import s from './AppBar.module.css'
import {selectIsLoggedIn} from "../../redux/auth/selectors.js";
import {useSelector} from "react-redux";
import Navigation from "../Navigation/Navigation.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";

function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <header className={s.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav/>}
        </header>
    );
}

export default AppBar;