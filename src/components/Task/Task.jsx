import s from './Task.module.css'
import {useDispatch} from "react-redux";
import {deleteTask} from "../../redux/tasks/operations.js";

function Task({id, text}) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteTask(id));
    }
    return (
        <div className={s.wrapper}>
            <p className={s.text}>{text}</p>
            <button type="button" onClick={handleDelete} className={s.button}>Delete</button>
        </div>
    );
}

export default Task;