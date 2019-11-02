import {Field, Form, reduxForm} from "redux-form";
import {renderDateTimePicker} from "../TaskPanel/common/ReduxFormComponents/DateTimePicker/renderDateTimePicker";
import MyCustomInput from "../TaskPanel/common/ReduxFormComponents/CoordAddressComponent/renderCoordAddress";
import React from "react";
import styles from "./TaskFilterForm.module.css"

const TaskForm = ({handleSubmit, w}) => {
    return <Form className={styles.ppp} onSubmit={handleSubmit}>
        <div className="formItems" >
            <Field placeholder={"Enter title of task..."} name={"taskName"} component={"input"}/>
        </div>
        <div className="formItems">
            <Field placeholder={"Enter task..."} name={"description"} component={"textarea"}/>
        </div>
        <div className="formItems">
            <Field name="idWorker" component="select">
                <option value="">Select employee...</option>
                {w.map(w => (
                    <option value={w.id} key={w.name}>
                        {w.name}
                    </option>
                ))}
            </Field>
        </div>
        <div className="formItems">
            <Field name={"deadline"} showTime={true} component={renderDateTimePicker}/>
        </div>
        <div className="formItems">
            <h3>Выберите место на карте</h3>
            <Field name={"taskAddress"} component={MyCustomInput}/>
        </div>
        <button>Create Task</button>
    </Form>
};

const TaskReduxForm = reduxForm({
    form: 'task',
    enableReinitialize: true,
})(TaskForm);

export default TaskReduxForm;
