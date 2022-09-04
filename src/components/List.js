import React from "react";
import "./List.css";
import ListItem from "./ListItem";

const List = (props) => {
    return (
        <>
            <div id="list-section">
                <ul id="job-list">
                    <ListItem jobsArray={props.jobsArray} setJobsArray={props.setJobsArray} />
                </ul>
            </div>
        </>
    );
}

export default List;