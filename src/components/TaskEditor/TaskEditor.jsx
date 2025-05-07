import s from './TaskEditor.module.css'
import {useDispatch} from "react-redux";
import {addTask} from "../../redux/tasks/operations.js";

function TaskEditor() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget;
        const text = form.elements.text.value;
        if (text !== '') {
            dispatch(addTask({text}));
            form.reset();
            return;
        }
        alert('Task cannot be empty. Enter some text!')
    }

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <input name='text' className={s.input}/>
            <button type="submit" className={s.button}>Add task</button>
        </form>
    );
}

export default TaskEditor;