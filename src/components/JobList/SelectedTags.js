import classes from './SelectedTags.module.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";



const SelectedTags = () =>{

    const dispatch = useDispatch();

    const jobTagsDisplayState = useSelector((state) => state.jobTagsToDisplayReducer);

    const tagToClose = ( event) => {
        event.preventDefault();
        dispatch({type: 'REMOVE_USER_SELECTED_TAG' , tagName: event.target.innerText})
    }

    const clearAllTagsFromFilter = ( event) => {
        event.preventDefault();
        dispatch({type: 'CLEAR_ALL_USER_SELECTED_TAG' })
    }
    const filterTags = jobTagsDisplayState['jobTagsDisplayState'].map( (tag , index)=> {
        return <span
                key={index}
                className={ classes.tag  }
                onClick={tagToClose}
                >

                    {tag}
               </span>


    })
    return (
        <div className={classes.jobtag}>
            {filterTags}
            <button
                className={classes.clearbtn}
                onClick={clearAllTagsFromFilter}>Clear</button>
        </div>
    )
}

export default SelectedTags