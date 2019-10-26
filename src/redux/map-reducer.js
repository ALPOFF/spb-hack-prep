const ADD_COORD_POINT = 'ADD_COORD_POINT';
const DEL_COORD_POINT = 'DEL_COORD_POINT';
const SEND_DATA = 'SEND_DATA'

let initialState = {
    coordsTemp: [],
    workers: [
        {name: "Lex"},
        {name: "Lev"},
        {name: "Nik"},
        {name: "Lis"}
    ],
    tasks: [],
    testData: [{tsk: "tsk1", time: '1995-12-19T03:24:00'}, {tsk: "tsk2", time: '2019-10-25T21:29:00'}, {tsk: "tsk3", time: '2019-10-25T22:28:00'}]
};

let mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COORD_POINT:
            return {
                ...state,
                coordsTemp: [...state.coordsTemp, action.coordPoint]
            };
        case SEND_DATA:
            return {
                ...state,
                tasks: [...state.tasks, {address: action.address, selectedEmployee: action.selectedEmployee, empTask: action.empTask, taskTime: action.taskTime, coords: state.coordsTemp}],
                coordsTemp: []
            };
        case DEL_COORD_POINT:
            return {
                ...state,
                coordsTemp: state.coordsTemp.filter(u => u !== action.pointId)
    };
        default:
            return state
    }
};

export const addCoordPoint = (coordPoint) => {
    return {
        type: ADD_COORD_POINT,
        coordPoint
    }
}

export const delCoordPoint = (pointId) => {
    return {
        type: DEL_COORD_POINT,
        pointId
    }
}

export const sendData = (address, selectedEmployee, empTask, taskTime) => {
    return {
        type: SEND_DATA,
            address,
            selectedEmployee,
            empTask,
            taskTime
    }
}



export default mapReducer;
