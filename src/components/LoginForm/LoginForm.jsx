import s from './LoginForm.module.css'
import {useDispatch} from "react-redux";
import {logIn} from "../../redux/auth/operations.js";

function LoginForm() {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget;

        dispatch(logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
            .unwrap()
            .then(() => {
                console.log('login successful');
            })
            .catch(() => {
                console.log('login failed');
            })

        form.reset();
    }
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.label}>
                Email
                <input type='email' name='email'/>
            </label>
            <label className={s.label}>
                Password
                <input type='password' name='password'/>
            </label>
            <button type="submit" className={s.button}>Log In</button>
        </form>
    );
}

export default LoginForm;