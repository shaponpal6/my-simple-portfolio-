import {LOAD_TAXONOMY} from '../actions/types';

const INITIAL_STATE = {
    taxonomy: []
}

const taxonomyReducer = (state = INITIAL_STATE,{ type, payload}) => {
    switch(type){
        case LOAD_TAXONOMY:
            return {
                ...state,
                taxonomy: payload.data
            }
        default:
            return state
    }
}

export default taxonomyReducer;