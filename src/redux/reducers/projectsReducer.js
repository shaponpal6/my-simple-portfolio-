import {LOAD_WORKS} from '../actions/types';

const INITIAL_STATE = {
    projects: []
}

const projectsReducer = (state = INITIAL_STATE,{ type, payload}) => {
    switch(type){
        case LOAD_WORKS:
            return {
                ...state,
                projects: payload.data
            }
        default:
            return state
    }
}

export default projectsReducer;