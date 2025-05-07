import {createSelector} from "@reduxjs/toolkit";
import {selectAllTasks} from "../tasks/selectors.js";

export const selectNameFilter = state => state.filters.name;

export const selectFilterTasks = createSelector([selectAllTasks, selectNameFilter], (tasks, filter) => {
    return tasks.filter(task => task.text.toLowerCase().includes(filter.toLowerCase()));
})