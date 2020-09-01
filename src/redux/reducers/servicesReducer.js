import {LOAD_SERVICES} from '../actions/types';

const INITIAL_STATE = {
    services: []
}

const servicesReducer = (state = INITIAL_STATE,{ type, payload}) => {
    switch(type){
        case LOAD_SERVICES:
            return {
                ...state,
                services: payload.data
            }
        default:
            return state
    }
}

export default servicesReducer;