import s from './RegisterForm.module.css'
import {useDispatch} from "react-redux";
import {register} from "../../redux/auth/operations.js";

function RegisterForm() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        // const form = e.currentTarget;


        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));

        form.reset();
    }
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.label}>
                Username
                <input type='text' name='name'/>
            </label>
            <label className={s.label}>
                Email
                <input type='email' name='email'/>
            </label>
            <label className={s.label}>
                Password
                <input type='password' name='password'/>
            </label>
            <button type="submit" className={s.button}>Register</button>
        </form>
    );
}

export default RegisterForm;