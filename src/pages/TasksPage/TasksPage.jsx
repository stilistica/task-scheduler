import {useDispatch, useSelector} from "react-redux";
import {selectError, selectLoading} from "../../redux/tasks/selectors.js";
import {useEffect} from "react";
import {fetchTasks} from "../../redux/tasks/operations.js";
import TaskEditor from "../../components/TaskEditor/TaskEditor.jsx";
import TaskList from "../../components/TaskList/TaskList.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";

function TasksPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <>
            <title>Your tasks</title>
            <TaskEditor />
            <SearchBox/>
            {isLoading && <div>Request in progress...</div>}
            <TaskList/>
            {error && <div>Server is dead..</div>}
        </>
    );
}

export default TasksPage;