import {selectIsLoggedIn} from "../redux/auth/selectors.js";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export const RestrictedRoute =
    ({component: Component, redirectTo = '/'}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn
        ? <Navigate to={redirectTo}/>
        : Component;
    }