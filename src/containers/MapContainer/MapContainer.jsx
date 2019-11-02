import React, {Component} from "react";
import "../../components/Map/Map.css"
import {connect} from "react-redux";
import {
    delCoordPoint,
    getAddress,
    requestTasks,
    requestWorkers,
    setData,
    setTask,
    taskFilter
} from "../../state/map-reducer";
import "./MapContainer.css"
import {
    getAddressTempSelector,
    getCoordTempSelector, getFilteredTasks,
    getTasksSelector,
    getTestDataSelector,
    getWorkersSelector
} from "../../state/map-selectors";
import YandexMaps from "../../components/Map/Map";
import TaskFilterReduxForm from "../../components/Forms/TaskFilterForm";
import TaskReduxForm from "../../components/Forms/TaskReduxForm"


class MapContainer extends Component {

    componentDidMount() {

        //setInterval(() => {this.setState({a:12})}, 3000)
        let {requestWorkers, requestTasks} = this.props;
        requestWorkers();
        requestTasks();
    }

    render() {
        console.log("RENDERED")
        const onSubmitTask = (formData) => {
            this.props.setTask(formData.selectedEmployee, formData.description, formData.deadline, formData.taskAddress)
        };
        let {addressTemp, workers, filteredTasks, taskFilter} = this.props;
        return (
            <div className="MapContainerWrapper">
                <div className="taskPanel">
                    <h3>Add Task</h3>
                    <TaskReduxForm initialValues={{taskAddress: addressTemp}} w={workers}
                                   onSubmit={onSubmitTask}/>
                    <h3>All Tasks</h3>
                    <TaskFilterReduxForm w={workers} filteredTasks={filteredTasks}
                                         taskFilter={taskFilter}/>
                </div>
                <YandexMaps {...this.props}/>
            </div>
        )
    }
}

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
    taskFilter,
    setTask
})(MapContainer);
