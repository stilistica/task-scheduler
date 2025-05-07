import {useDispatch, useSelector} from "react-redux";
import {selectLoading} from "../../redux/tasks/selectors.js";
import {useEffect} from "react";
import {fetchTasks} from "../../redux/tasks/operations.js";

function TasksPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <>
            <title>Your tasks</title>

            {isLoading && <div>Request in progress...</div>}

        </>
    );
}

export default TasksPage;