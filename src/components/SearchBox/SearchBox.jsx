import s from './SearchBox.module.css'
import {selectNameFilter} from "../../redux/filter/selectors.js";
import {useDispatch, useSelector} from "react-redux";
import {changeFilter} from "../../redux/filter/slice.js";

function SearchBox() {
    const name = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    return (
        <div className={s.container}>
            <p className={s.title}>Find task: </p>
            <input type='text' value={name}
                   onChange={(e) => dispatch(changeFilter(e.target.value))}
                   className={s.input}/>
        </div>
    );
}

export default SearchBox;