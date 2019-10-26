import {taskAPI} from "../api/api";

const DEL_COORD_POINT = 'DEL_COORD_POINT';
const SEND_DATA = 'SEND_DATA';
const SET_ADDRESS = 'SET_ADDRESS'

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
    }]
};

let mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_DATA:
            return {
                ...state,
                tasks: [...state.tasks, {
                    address: action.address,
                    selectedEmployee: action.selectedEmployee,
                    empTask: action.empTask,
                    taskTime: action.taskTime,
                    coords: state.addressTemp
                }],
                addressTemp: []
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

export const getAddress = (coordPointAdd) => {
    return (dispatch) => {
        taskAPI.geodecode(coordPointAdd).then(response => {
            let address = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text;
            //console.log(response.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text)
            dispatch(setAddress(address, coordPointAdd))
        })
    }
}


export default mapReducer;
