import React, {Fragment, useEffect, useState} from 'react'
import classes from './Joblist.module.css'
import SelectedTags from '../JobList/SelectedTags'
import {useDispatch, useSelector} from 'react-redux';
import JobItem from "./JobItem/JobItem";
import {useMediaQuery} from "react-responsive";



let isInitial = true;

const Joblist = (props) =>{

    const dispatch = useDispatch();
    const [appStartInitialJoblist, setAppStartInitialJobList] = useState([]);
    const jobTagsDisplayState = useSelector((state) => state.jobTagsToDisplayReducer);
    const JOB_LIST_INITIAL = useSelector((state) => state.jobListToDisplayReducer  );

    const isMobile = useMediaQuery({ query: `(max-width: 376px)` });


    let initial_JobList = JOB_LIST_INITIAL['jobList'];

    if(isInitial){
       isInitial=false;
       setAppStartInitialJobList( initial_JobList);
    }

    useEffect( ()  => {
        let initialJobList = appStartInitialJoblist;
        let newJobList = [];
        let jobTagsToDisplay = jobTagsDisplayState['jobTagsDisplayState']

        for(let jobItem of initialJobList){
            let languagesInEachJob = jobItem['languages']
            if(jobTagsToDisplay.length >0 ){
                outer1 :    for(let i of jobTagsToDisplay){
                    if(languagesInEachJob.length > 0){
                        for(let j of languagesInEachJob){
                            if( i === j){
                                newJobList.push(jobItem);
                                break outer1;
                            }
                        }
                    }

                }
            }
        }

        if(jobTagsDisplayState['jobTagsDisplayState'].length > 0){
            dispatch({type: 'UPDATE_JOBLIST' , updatedjoblist: [...newJobList]})
        }else{
            dispatch({type: 'KEEP_INITIAL_JOBLIST'})
        }



    }, [jobTagsDisplayState])




    const jobItemsInList = initial_JobList.map( jobitem => {

        return <JobItem
            key={jobitem.id}
            id={jobitem.id}
            logo= {jobitem.logo}
            position={jobitem.position}
            company={jobitem.company}
            new={jobitem.new}
            featured={jobitem.featured}
            postedAt={jobitem.postedAt}
            contract={jobitem.contract}
            location={jobitem.location}
            languages={jobitem.languages}
            tools={jobitem.tools}
            role={jobitem.role}
            level={jobitem.level}
        />
    })



    if(isMobile){
        if(jobTagsDisplayState['jobTagsDisplayState'].length > 0){
            const styles = classes['expand-margin-for-joblist'] + ' ' + classes['ul-joblist']

            return (
                <Fragment>

                    <div className={classes['job-list']}>
                        {jobTagsDisplayState['jobTagsDisplayState'].length > 0 ? <SelectedTags/>: null
                        }
                        <ul className={styles}>
                            {jobItemsInList}
                        </ul>

                    </div>
                </Fragment>

            )
        }
        return (
            <Fragment>

                <div className={classes['job-list']}>
                    {jobTagsDisplayState['jobTagsDisplayState'].length > 0 ? <SelectedTags/> : null
                    }
                    <ul className={classes['ul-joblist']}>
                        {jobItemsInList}
                    </ul>

                </div>
            </Fragment>

        )
    }

    return (
        <Fragment>

            <div className={classes['job-list']}>
                {jobTagsDisplayState['jobTagsDisplayState'].length > 0 ? <SelectedTags/> : null
                }
                <ul className={classes['ul-joblist']}>
                    {jobItemsInList}
                </ul>

            </div>
        </Fragment>

    )
}

export default Joblist