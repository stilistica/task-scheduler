import s from './TaskList.module.css'
import {useSelector} from "react-redux";
import Task from "../Task/Task.jsx";
import {selectFilterTasks} from "../../redux/filter/selectors.js";

function TaskList() {
    const tasks = useSelector(selectFilterTasks);


    return (
        <ul className={s.list}>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task id={task.id} text={task.text} />
                </li>
            ))}
        </ul>
    );
}

export default TaskList;