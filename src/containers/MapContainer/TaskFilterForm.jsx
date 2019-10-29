import React from "react";
import {Field, Form, reduxForm} from "redux-form";

const TaskFilterForm = (props) => {
    let onChangeFilter = (e) => {
        let id = e.currentTarget.value;
        props.taskFilter(id)
    }
    return <div>
        <select onChange={onChangeFilter}>
            <option value="">Select worker for filtering ...</option>
            <option value="all_tasks">Show All Tasks</option>
            {props.w.map(w => (
                <option value={w.name} key={w.name}>
                    {w.name}
                </option>
            ))}
        </select>

        <div className="tasks">
            {props.filteredTasks.map(t => (new Date(t.taskTime) < new Date())
                ? <div>Время истекло</div>
                : <div className="taskItemLI">
                    <ul className="taskItemUL">
                    </ul>
                    <ul>
                        <li>Task - {t.empTask}</li>
                        <li>Worker - {t.selectedEmployee}</li>
                        <li>Address - {t.address.map(c => c.address)}</li>
                        <li>Deadline - {String(t.taskTime)}</li>
                    </ul>
                </div>)}
        </div>

    </div>


};

export default TaskFilterForm;
