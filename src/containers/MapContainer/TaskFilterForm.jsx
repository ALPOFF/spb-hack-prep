import React from "react";
import {Field, Form, reduxForm} from "redux-form";

const TaskFilterForm = (props) => {
    let onChangeFilter =(e) => {
        let id = e.currentTarget.value;
        props.taskFilter(id)
    }
    return <div>
        <select onChange={onChangeFilter}>
            <option value="">Select worker for filtering ...</option>
            {props.w.map(w => (
                <option value={w.name} key={w.name}>
                    {w.name}
                </option>
            ))}
        </select>
        <div>
            {props.filteredTasks.map(t => <ul>
                <li>{t.empTask}</li>
            </ul>)}
        </div>

    </div>


};

export default TaskFilterForm;
