import React, {Component} from "react";
import "./Map.css"
import {connect} from "react-redux";
import {delCoordPoint, getAddress, requestTasks, requestWorkers, setData} from "../../redux/map-reducer";
import {Field, Form, reduxForm} from "redux-form";
import {renderDateTimePicker} from "../TaskPanel/common/ReduxFormComponents/DateTimePicker/renderDateTimePicker";
import YandexMaps from "./Map";
import "./MapContainer.css"
import MyCustomInput from "../TaskPanel/common/ReduxFormComponents/CoordAddressComponent/renderCoordAddress";


class MapContainer extends Component {

    componentDidMount() {
        //setInterval(() => {this.setState({a:12})}, 3000)
        this.props.requestWorkers();
        this.props.requestTasks();
    }

    render() {
        console.log("RENDERED")
        const onSubmit = (formData) => {
            this.props.setData(formData.selectedEmployee, formData.empTask, formData.taskTime, formData.taskAddress)
        }

        return (
            <div className="MapContainerWrapper">
                <div className="taskPanel">
                    <h3 style={{color: "#414141"}}>Add Task</h3>
                    <TaskReduxForm initialValues={{taskAddress: this.props.addressTemp}} w={this.props.workers}
                                   onSubmit={onSubmit}/>
                    <h3 style={{color: "#414141"}}>Tasks</h3>
                    <div className="tasks">
                        {this.props.tasks.map(t => (new Date(t.taskTime) < new Date())
                            ? <div>Время истекло</div>
                            : <div className="taskItemLI">
                                <ul className="taskItemUL">
                                    <li>Task - {t.empTask}</li>
                                    <li>Worker - {t.selectedEmployee}</li>
                                    <li>Address - {t.address.map(c => c.address)}</li>
                                    <li>Deadline - {String(t.taskTime)}</li>
                                </ul>
                            </div>)}
                    </div>


                </div>
                {/*Task panel*/}
                <YandexMaps {...this.props}/> {/*map*/}
            </div>
        )
    }
}

const TaskForm = (props) => {
    return <Form className="ppp" onSubmit={props.handleSubmit}>
        <div className="formItems">
            <Field style={{width: "98%"}} placeholder={"Enter task..."} name={"empTask"} component={"textarea"}/>
        </div>
        <div className="formItems">
            <Field style={{width: "100%"}} name="selectedEmployee" component="select">
                <option value="">Select employee...</option>
                {props.w.map(w => (
                    <option value={w.name} key={w.name}>
                        {w.name}
                    </option>
                ))}
            </Field>
        </div>
        <div className="formItems">
            <Field name={"taskTime"} showTime={true} component={renderDateTimePicker}/>
        </div>
        <div className="formItems">
            <h3>Выберите место на карте</h3>
            <Field name={"taskAddress"} component={MyCustomInput}/>
        </div>
        <button>Create Task</button>
    </Form>
}

const TaskReduxForm = reduxForm({
    form: 'task',
    enableReinitialize: true,
})(TaskForm)

const mapStateToProps = (state) => ({
    coordsTemp: state.mapReducer.coordsTemp,
    workers: state.mapReducer.workers,
    tasks: state.mapReducer.tasks,
    testData: state.mapReducer.testData,
    addressTemp: state.mapReducer.addressTemp,
    xxx: state.mapReducer.xxx
})

export default connect(mapStateToProps, {getAddress, delCoordPoint, setData, requestWorkers, requestTasks})(MapContainer);
