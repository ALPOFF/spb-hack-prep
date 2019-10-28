import {createSelector} from "reselect";

export const getCoordTempSelector = (state) => {
    return state.mapReducer.coordsTemp
}

export const getWorkersSelector = (state) => {
    return state.mapReducer.workers
}

export const getTasksSelector = (state) => {
    return state.mapReducer.tasks
}

export const getTestDataSelector = (state) => {
    return state.mapReducer.testData
}

export const getAddressTempSelector = (state) => {
    return state.mapReducer.addressTemp
}

