import {taskAPI} from "../api/api";

const DEL_COORD_POINT = 'map/DEL_COORD_POINT';
const SET_TASK = 'map/SET_TASK';
const SET_ADDRESS = 'map/SET_ADDRESS';
const SET_TASKS_ARR = 'map/SET_TASKS_ARR';
const SET_WORKERS = 'map/SET_WORKERS';
const TASK_FILTER = 'map/TASK_FILTER'

let initialState = {
    coordsTemp: [],
    addressTemp: {},
    workers: [
        {id: 0, name: "Lex"},
        {id: 1, name: "Lev"},
        {id: 2, name: "Nik"},
        {id: 3, name: "Lis"}
    ],
    tasks: [],
    testData: [{tsk: "tsk1", time: '1995-12-19T03:24:00'}, {tsk: "tsk2", time: '2019-10-25T21:29:00'}, {
        tsk: "tsk3",
        time: '2019-10-25T22:28:00'
    }],
    filteredTasks: []
};

let mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {
                    taskName: action.taskName,
                    idWorker: action.idWorker,
                    description: action.description,
                    deadline: action.deadline,
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
                addressTemp: {}
            };
        case SET_ADDRESS:
            return {
                ...state,
                addressTemp: {address: action.address, coords: action.coordPointAdd}
            };
        case SET_WORKERS:
            return {
                ...state,
                workers: action.workers
            };
        case TASK_FILTER:
            return {
                ...state,
                filteredTasks: (action.id === 'all_tasks')
                    ? state.tasks
                    : state.tasks.filter(t => t.idWorker === action.id)
            };
        default:
            return state
    }
};

export const taskFilter = (id) => {
    return {
        type: TASK_FILTER,
        id
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

export const setData = (taskName, idWorker, description, deadline, taskAddress) => {
    return {
        type: SET_TASK,
        taskName,
        idWorker,
        description,
        deadline,
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

//send task to server + set task in state store
export const setTask = (taskName, idWorker, description, deadline, taskAddress) => {
    return (dispatch) => {
        taskAPI.sendTask(taskName, idWorker, description, deadline, taskAddress).then(response => {
            dispatch(setData(taskName, idWorker, description, deadline, taskAddress))
        })
    }
};

//request list of tasks
export const requestTasks = () => {
    return (dispatch) => {
        taskAPI.getTasks().then(response => {
            console.log(response.data);
            dispatch(setTasksArr(response.data))
        })
    }
};

//request list of workers
export const requestWorkers = () => {
    return (dispatch) => {
        taskAPI.getWorkers().then(response => {
            console.log(response.data);
            dispatch(setWorkers(response.data))
        })
    }
};

export default mapReducer;
