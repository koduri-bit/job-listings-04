import { createStore,combineReducers } from 'redux';
import {jobListToDisplayReducer} from './JobListReducer'
import {jobTagsToDisplayReducer} from './JobTagsDisplayReducer';





const rootReducer = combineReducers({
    jobListToDisplayReducer: jobListToDisplayReducer,
    jobTagsToDisplayReducer :jobTagsToDisplayReducer ,
})


const store = createStore(rootReducer);

export default store;