import React from "react";

const TaskFilterForm = ({w, filteredTasks, taskFilter}) => {
    let onChangeFilter = (e) => {
        let id = e.currentTarget.value;
        taskFilter(id)
    }
    return <div>
        <select onChange={onChangeFilter}>
            <option value="">Select worker for filtering ...</option>
            <option value="all_tasks">Show All Tasks</option>
            {w.map(w => (
                <option value={w.name} key={w.name}>
                    {w.name}
                </option>
            ))}
        </select>

        <div className="tasks">
            {filteredTasks.map(t => (new Date(t.taskTime) < new Date())
                ? <div key={t.name}>Время истекло</div>
                : <div key={t.name} className="taskItemLI">
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
