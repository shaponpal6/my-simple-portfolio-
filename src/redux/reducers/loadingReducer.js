import { SET_LOADING } from "../actions/types";

const INITIAL_STATE = { loading: false }

const loadingReducer = (state = INITIAL_STATE,{type, payload}) => {
    switch(type){
        case SET_LOADING:
            return {
                ...state,
                loading: payload
            }
        default:
            return state
    }
}

export default loadingReducer;