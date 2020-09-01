import { combineReducers } from 'redux';
import servicesReducer from './servicesReducer';
import skillsReducer from './skillsReducer';
import loadingReducer from './loadingReducer';
import projectsReducer from './projectsReducer';
import taxonomyReducer from './taxonomyReducer';
import projectsTaxonomyReducer from './projectsTaxonomyReducer';

const rootReducer = combineReducers({
    services: servicesReducer,
    skills: skillsReducer,
    loading: loadingReducer,
    projects: projectsReducer,
    taxonomy: taxonomyReducer,
    projectsTaxonomy: projectsTaxonomyReducer
})

export default rootReducer;