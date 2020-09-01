import { LOAD_PROJECT_TAXONOMY } from "../actions/types";

const INITIAL_STATE = {
  projectsTaxonomy: [],
};

const projectsTaxonomyReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOAD_PROJECT_TAXONOMY:
      return {
        ...state,
        projectsTaxonomy: payload.data,
      };
    default:
      return state;
  }
};

export default projectsTaxonomyReducer;
