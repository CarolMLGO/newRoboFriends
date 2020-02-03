import { actionTypes } from '../actions/actionTypes';

const initialStateSearch = {
    searchField: ""
}

export const searchRobotsReducer = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case actionTypes.CHANGE_SEARCHFIELD:
            return {
                ...state,
                searchField: action.payload
            };
        default:
            return state;
    }
};

//______________________________________________________________________
const initialStateRobots = {
    isPending: false,
    robots: [],
    err: ''
}
export const requestRobotsReducer = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case actionTypes.REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                isPending: true
            };
        case actionTypes.REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                robots: action.payload,
                isPending: false
            };
        case actionTypes.REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                err: action.payload,
                isPending: false
            };
        default:
            return state;
    }
};