import React from "react";
import styles from "./TaskFilterForm.module.css"

const TaskFilterForm = ({w, filteredTasks, taskFilter}) => {
    let onChangeFilter = (e) => {
        let id = e.currentTarget.value;
        taskFilter(id)
    }
    return <div className={styles.ppp}>
        <select onChange={onChangeFilter}>
            <option value="">Select worker for filtering ...</option>
            <option value="all_tasks">Show All Tasks</option>
            {w.map(w => (
                <option value={w.id} key={w.name}>
                    {w.name}
                </option>
            ))}
        </select>

        <div className="tasks">
            {filteredTasks.map(t => (new Date(t.deadline) < new Date())
                ? <div key={t.name}>Время истекло</div>
                : <div key={t.name} className="taskItemLI">
                    <ul className="taskItemUL">
                    </ul>
                    <ul>
                        <li>Task - {t.description}</li>

                        <li>Worker - {w.map(w => {if (w.id == t.idWorker) return w.name})}</li>
                        <li>Address - {t.address.address}</li>
                        <li>Deadline - {String(t.deadline)}</li>
                    </ul>
                </div>)}
        </div>

    </div>


};

export default TaskFilterForm;
