import { LOAD_SKILLS } from '../actions/types';

const INITIAL_STATE = {
    skills: []
}

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case LOAD_SKILLS:
            return {
                ...state,
                skills: payload.data
            }
        default:
            return state;
    }
};

export default reducer;