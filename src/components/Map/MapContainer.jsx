import React, {Component} from "react";
import styles from "./Map.module.css"
import {connect} from "react-redux";
import {delCoordPoint, getAddress, sendData} from "../../redux/map-reducer";
import {Field, reduxForm} from "redux-form";
import moment from "moment";
import momentLocalizer from "react-widgets-moment"
import 'react-widgets/dist/css/react-widgets.css'
import {renderDateTimePicker} from "../TaskPanel/common/DateTimePicker/renderDateTimePicker";
import YandexMaps from "./Map";

momentLocalizer(moment)

class MapContainer extends Component {

    componentDidMount() {
        //setInterval(() => {this.setState({a:12})}, 3000)
    }

    render() {
console.log("RENDERED")
        const onSubmit = (formData) => {
            this.props.sendData(formData.address, formData.selectedEmployee, formData.empTask, formData.taskTime)
        }

        return (
            <div className={styles.htm}>
                <YandexMaps {...this.props}/>
                <div className={styles.panel_container}>
                    <div className={styles.right_panel}>
                        <h1>Add Task</h1>
                        <TaskReduxForm {...this.props} onSubmit={onSubmit}/>
                    </div>

                    <div>
                        <h1>Tasks</h1>
                        {this.props.testData.map(td => (new Date(td.time) > new Date())
                            ? <div>{td.tsk}</div>
                            : <div>Время истекло</div>)}
                        <ul>
                            {this.props.tasks.map(t =>
                                <li>
                                    <ul>
                                        <li>Task - {t.empTask}</li>
                                        <li>Address - {t.coords.map(c => c.address)}</li>
                                        <li>Worker - {t.selectedEmployee}</li>
                                    </ul>
                                </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const TaskForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Enter task..."} name={"empTask"} component={"textarea"}/>
        </div>
        <div>
            <Field  name={"sdfsd"} component={"dfdf"}/>
        </div>
        <div>
            <Field placeholder={"Enter address..."} name={"address"} value={"sdfsdfsfd"} component={"input"}/>
        </div>
        <div>
            <Field name="selectedEmployee" component="select">
                <option value="">Select employee...</option>
                {props.workers.map(w => (
                    <option value={w.name} key={w.name}>
                        {w.name}
                    </option>
                ))}
            </Field>
        </div>
        <div>
            <Field name={"taskTime"} component={renderDateTimePicker}/>
        </div>
        <div>
            <button>Create Task</button>
        </div>
    </form>
}

const TaskReduxForm = reduxForm({
    form: 'task'
})(TaskForm)

const mapStateToProps = (state) => ({
    coordsTemp: state.mapReducer.coordsTemp,
    workers: state.mapReducer.workers,
    tasks: state.mapReducer.tasks,
    testData: state.mapReducer.testData,
    addressTemp: state.mapReducer.addressTemp
})

export default connect(mapStateToProps, {getAddress, delCoordPoint, sendData})(MapContainer);
