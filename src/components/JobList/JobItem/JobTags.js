import classes from './JobTag.module.css'
import {  useDispatch } from 'react-redux';


const JobTags = (props) =>{
    const dispatch = useDispatch();

    let lang = [...props.languages]
    let tools = [...props.tools]
    let tags = [  props.role, props.level, ...lang, ...tools]

    const saveTheTag = (event) =>{
        event.preventDefault();
        let value = event.target.innerText ;
        if(lang.findIndex( item => item ===  value) > -1){
            dispatch({type: 'SAVE_USER_SELECTED_TAG' , tagName: event.target.innerText})
        }

    }




    const newTags = tags.map( (tag , index)=> {
        return <span

                     key={index}
                     className={classes.tag}
                     onClick={saveTheTag}>

                {tag}
               </span>

    })
    return (
        <div className={classes['jobtags']}>
           {newTags}
        </div>
    )
}

export default JobTags