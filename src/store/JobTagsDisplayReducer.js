
const initialJobTagsSaved = {
    jobTagsDisplayState: []
}

export const jobTagsToDisplayReducer = (state = initialJobTagsSaved , action) => {

    if(action.type === 'SAVE_USER_SELECTED_TAG'){

        if(state['jobTagsDisplayState'].findIndex(alreadyExistTag => action.tagName === alreadyExistTag) < 0){
            let newTagList =  [ ...state['jobTagsDisplayState'], action.tagName];
            return {
                jobTagsDisplayState: newTagList
            }
        }

    }

    if(action.type === 'REMOVE_USER_SELECTED_TAG'){
        let newTags = []
        let oldTags = [...state['jobTagsDisplayState']];
        newTags = oldTags.filter( tag => tag !== action.tagName);
        return {
            jobTagsDisplayState: [...newTags]
        }
    }


    if(action.type === 'CLEAR_ALL_USER_SELECTED_TAG'){
        return {
            jobTagsDisplayState: []
        }
    }

    return state;
}
