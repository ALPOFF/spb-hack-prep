const ADD_COORD_POINT = 'ADD_COORD_POINT';
const DEL_COORD_POINT = 'DEL_COORD_POINT'

let initialState = {
    users: [{id: null, coords: []}]
};

let mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COORD_POINT:
            return {
                ...state,
                users: [...state.users, {id: state.users.length - 1, coords: action.coordPoint}]
            }
        case DEL_COORD_POINT:
            return {
                ...state,
                users: state.users.filter(el => el.coords !== action.pointId)
            }
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

export default mapReducer;
