import {taskAPI} from "../api/api";

const DEL_COORD_POINT = 'DEL_COORD_POINT';
const SET_TASK = 'SET_TASK';
const SET_ADDRESS = 'SET_ADDRESS';
const SET_TASKS_ARR = 'SET_TASKS_ARR';
const SET_WORKERS = 'SET_WORKERS'

let initialState = {
    coordsTemp: [],
    addressTemp: [],
    workers: [
        {name: "Lex"},
        {name: "Lev"},
        {name: "Nik"},
        {name: "Lis"}
    ],
    tasks: [],
    testData: [{tsk: "tsk1", time: '1995-12-19T03:24:00'}, {tsk: "tsk2", time: '2019-10-25T21:29:00'}, {
        tsk: "tsk3",
        time: '2019-10-25T22:28:00'
    }],
    xxx: 4
};

let mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {
                    selectedEmployee: action.selectedEmployee,
                    empTask: action.empTask,
                    taskTime: action.taskTime,
                    address: action.taskAddress
                }],
                addressTemp: []
            };
            case SET_TASKS_ARR:
            return {
                ...state,
                tasks: action.tasks
            };
        case DEL_COORD_POINT:
            return {
                ...state,
                addressTemp: state.addressTemp.filter(u => u.coords !== action.pointId)
            };
        case SET_ADDRESS:
            return {
                ...state,
                addressTemp: [...state.addressTemp, {address: action.address, coords: action.coordPointAdd}]
            };
            case SET_WORKERS:
            return {
                ...state,
                workers: action.workers
            };
        default:
            return state
    }
};

export const setAddress = (address, coordPointAdd) => {
    return {
        type: SET_ADDRESS,
        address,
        coordPointAdd
    }
};

export const delCoordPoint = (pointId) => {
    return {
        type: DEL_COORD_POINT,
        pointId
    }
};

export const setData = (selectedEmployee, empTask, taskTime, taskAddress) => {
    return {
        type: SET_TASK,
        selectedEmployee,
        empTask,
        taskTime,
        taskAddress
    }
};

export const setTasksArr = (tasks) => {
    return {
        type: SET_TASKS_ARR,
        tasks
    }
};

export const setWorkers = (workers) => {
    return {
        type: SET_WORKERS,
        workers
    }
}

export const getAddress = (coordPointAdd) => {
    return (dispatch) => {
        taskAPI.geodecode(coordPointAdd).then(response => {
            let address = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text;
            dispatch(setAddress(address, coordPointAdd))
        })
    }
};

//send task to server + set task in redux store
export const setTask = (selectedEmployee, empTask, taskTime, taskAddress) => {
    return (dispatch) => {
        taskAPI.sendTask(selectedEmployee, empTask, taskTime, taskAddress).then(response => {
            dispatch(setData(selectedEmployee, empTask, taskTime, taskAddress))
        })
    }
};

//request list of tasks
export const requestTasks = () => {
    return (dispatch) => {
        taskAPI.getTasks().then(response => {
            dispatch(setTasksArr(response.data))
        })
    }
}

//request list of workers
export const requestWorkers = () => {
    return (dispatch) => {
        taskAPI.getWorkers().then(response => {
            dispatch(setWorkers(response.data))
        })
    }
}

export default mapReducer;
