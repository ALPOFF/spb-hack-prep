import React, {Component} from "react";
import "../../components/Map/Map.css"
import {connect} from "react-redux";
import {delCoordPoint, getAddress, requestTasks, requestWorkers, setData, taskFilter} from "../../redux/map-reducer";
import {Field, Form, reduxForm} from "redux-form";
import "./MapContainer.css"
import {
    getAddressTempSelector,
    getCoordTempSelector, getFilteredTasks,
    getTasksSelector,
    getTestDataSelector,
    getWorkersSelector
} from "../../redux/map-selectors";
import MyCustomInput
    from "../../components/TaskPanel/common/ReduxFormComponents/CoordAddressComponent/renderCoordAddress";
import {renderDateTimePicker} from "../../components/TaskPanel/common/ReduxFormComponents/DateTimePicker/renderDateTimePicker";
import YandexMaps from "../../components/Map/Map";
import TaskFilterReduxForm from "./TaskFilterForm";


class MapContainer extends Component {

    componentDidMount() {
        //setInterval(() => {this.setState({a:12})}, 3000)
        this.props.requestWorkers();
        this.props.requestTasks();
    }

    render() {
        console.log("RENDERED")
        const onSubmitTask = (formData) => {
            this.props.setData(formData.selectedEmployee, formData.empTask, formData.taskTime, formData.taskAddress)
        };


        return (
            <div className="MapContainerWrapper">
                <div className="taskPanel">
                    <h3 style={{color: "#414141"}}>Add Task</h3>
                    <TaskReduxForm initialValues={{taskAddress: this.props.addressTemp}} w={this.props.workers}
                                   onSubmit={onSubmitTask}/>
                    <h3 style={{color: "#414141"}}>All Tasks</h3>
                    <TaskFilterReduxForm w={this.props.workers} filteredTasks={this.props.filteredTasks} taskFilter={this.props.taskFilter}/>
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
};

const TaskReduxForm = reduxForm({
    form: 'task',
    enableReinitialize: true,
})(TaskForm);

const mapStateToProps = (state) => ({
    coordsTemp: getCoordTempSelector(state),
    workers: getWorkersSelector(state),
    tasks: getTasksSelector(state),
    testData: getTestDataSelector(state),
    addressTemp: getAddressTempSelector(state),
    filteredTasks: getFilteredTasks(state)
});

export default connect(mapStateToProps, {
    getAddress,
    delCoordPoint,
    setData,
    requestWorkers,
    requestTasks,
    taskFilter
})(MapContainer);
