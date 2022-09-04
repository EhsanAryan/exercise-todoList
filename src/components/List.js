import React , { useContext } from "react";
import "./List.css";
import ListItem from "./ListItem";
import AppContext from "../context/AppContext";


const List = () => {
    
    const context = useContext(AppContext);

    return (
        <>
            <div id="list-section">
                <ul id="job-list">
                    <ListItem jobsArray={context.jobsArray} setJobsArray={context.setJobsArray} />
                </ul>
            </div>
        </>
    );
}

export default List;