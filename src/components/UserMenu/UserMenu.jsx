import s from './UserMenu.module.css'
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../redux/auth/selectors.js";
import {logOut} from "../../redux/auth/operations.js";
import clsx from "clsx";

function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={s.wrapper}>
            <p className={s.username}>Welcome, {user.name}</p>
            <button type="button" onClick={() => dispatch(logOut())} className={s.button}>
                Logout
            </button>
        </div>
    );
}

export default UserMenu;