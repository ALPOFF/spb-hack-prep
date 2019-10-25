const ADD_COORD_POINT = 'ADD_COORD_POINT';
const DEL_COORD_POINT = 'DEL_COORD_POINT';
const SEND_DATA = 'SEND_DATA'

let initialState = {
    users: [],
    workers: [
        {name: "Lex"},
        {name: "Lev"},
        {name: "Nik"},
        {name: "Lis"}
    ],
    tasks: [],
    testData: [{coords: [55.8273772976203, 37.508201904296875]}]
};

let mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COORD_POINT:
            return {
                ...state,
                users: [...state.users, {id: state.users.length - 1, coords: action.coordPoint}]
            };
        case SEND_DATA:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case DEL_COORD_POINT:
            return {
                ...state,
                users: state.users.filter(u => u.coords !== action.pointId)
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
        payload: {
            address,
            selectedEmployee,
            empTask,
            taskTime
        }
    }
}



export default mapReducer;
