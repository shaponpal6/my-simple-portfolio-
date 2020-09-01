import axios from "axios";
import {
  LOAD_SERVICES,
  LOAD_WORKS,
  LOAD_SKILLS,
  SET_LOADING,
  LOAD_TAXONOMY,
  LOAD_PROJECT_TAXONOMY,
} from "./types";
import { keys } from "../../keys";

const { apiUrl } = keys;

//Services
export const loadServices = () => {
  return async (dispatch) => {
    try {
      let request = await axios.get(`${apiUrl}api/data/services.json`);
      dispatch({
        type: LOAD_SERVICES,
        payload: request.data,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
};

// Skills
export const loadSkills = (time) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    setTimeout(async () => {
      let req = await axios.get(`${apiUrl}api/data/skills.json`);
      if (req.status === 200) {
        dispatch({
          type: LOAD_SKILLS,
          payload: req.data,
        });
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
      }
    }, time);
  };
};

//Loading
export const setLoading = (value) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: value,
    });
  };
};

//Projects 
export const loadProjects = () => {
  
  return async (dispatch) => {
    try {
      let request = await axios.get(`${apiUrl}api/data/works.json`);
      
      dispatch({
        type: LOAD_WORKS,
        payload: request.data,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
};

//load Taxonomy
export const loadTaxonomy = () => {
  console.log('taxomony loding....')
  return async (dispatch) => {
    try {
      let request = await axios.get(`${apiUrl}api/data/taxonomy.json`);
      console.log(request)
      dispatch({
        type: LOAD_TAXONOMY,
        payload: request.data,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
};

//load Project Taxonomy
export const loadProjectTaxonomy = () => {
  return async (dispatch) => {
    try {
      let request = await axios.get(`${apiUrl}api/data/project-taxonomy.json`);
      dispatch({
        type: LOAD_PROJECT_TAXONOMY,
        payload: request.data,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
};
