import { actionTypes } from './actionTypes';

export const setSearchField = (text: String) => {
    return {
        type: actionTypes.CHANGE_SEARCHFIELD,
        payload: text
    }
}

// the middleware knows how to handle functions, it passes the dispatch method as an argument to the function, thus making it able to dispatch actions itself. 
export const requestRobots = () => (dispatch: any) => {
    dispatch({ type: actionTypes.REQUEST_ROBOTS_PENDING });

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp => resp.json())
        .then(users => dispatch({ type: actionTypes.REQUEST_ROBOTS_SUCCESS, payload: users }))
        .catch(error => dispatch({ type: actionTypes.REQUEST_ROBOTS_FAILED, payload: error }))

} //return a function, redux-thunk, will listen to it, and passes the dispatch method as an argument to the function.