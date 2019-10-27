import React, {Component} from "react";
import "./Map.css"
import {connect} from "react-redux";
import {delCoordPoint, getAddress, sendData} from "../../redux/map-reducer";
import {Field, reduxForm} from "redux-form";
import {renderDateTimePicker} from "../TaskPanel/common/DateTimePicker/renderDateTimePicker";
import YandexMaps from "./Map";
import "./MapContainer.css"


class MapContainer extends Component {

    componentDidMount() {
        //setInterval(() => {this.setState({a:12})}, 3000)
    }

    render() {
console.log("RENDERED")
        const onSubmit = (formData) => {
    console.log(typeof(formData.taskTime))
            this.props.sendData(formData.address, formData.selectedEmployee, formData.empTask, formData.taskTime)
        }

        return (
            <div className="MapContainerWrapper">
                <div className="taskPanel">
                        <h3 style={{color: "#414141"}}>Add Task</h3>
                        <TaskReduxForm {...this.props} onSubmit={onSubmit}/>
                        <h3 style={{color: "#414141"}}>Tasks</h3>
                       {/* {this.props.testData.map(td => (new Date(td.time) > new Date())
                            ? <div>{td.tsk}</div>
                            : <div>Время истекло</div>)}*/}
                        <ul>
                            {this.props.tasks.map(t =>
                                <li className="taskItemLI">
                                    <ul className="taskItemUL">
                                        <li>Task - {t.empTask}</li>
                                        <li>Worker - {t.selectedEmployee}</li>
                                        <li>Address - {t.coords.map(c => c.address)}</li>
                                        <li>Deadline - {String(t.taskTime)}</li>
                                    </ul>
                                </li>)}
                        </ul>

                </div> {/*Task panel*/}
                    <YandexMaps {...this.props}/> {/*map*/}
            </div>
        )
    }
}

const TaskForm = (props) => {
    return <form className="ppp" onSubmit={props.handleSubmit}>
        <div className="formItems">
            <Field style={{width: "98%"}} placeholder={"Enter task..."} name={"empTask"} component={"textarea"}/>
        </div>
        <div className="formItems">
            <Field style={{width: "100%"}} name="selectedEmployee" component="select">
                <option value="">Select employee...</option>
                {props.workers.map(w => (
                    <option value={w.name} key={w.name}>
                        {w.name}
                    </option>
                ))}
            </Field>
        </div>
        <div className="formItems">
            <Field name={"taskTime"} showTime={true} component={renderDateTimePicker}/>
        </div>

                <button>Create Task</button>

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
