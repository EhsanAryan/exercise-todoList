import React , { useContext } from "react";
import ReactDOM from "react-dom";
import "./ListItem.css";
import AppContext from "../context/AppContext";

const ListItem = () => {

    const context = useContext(AppContext);


    // Event Handlers
    const completeJob = (event) => {
        const liArray = [...document.querySelectorAll(".list-item")];
        const currentLi = event.target.parentNode.parentNode;
        const selectedIndex = liArray.indexOf(currentLi);
        const currentSpan = currentLi.querySelector("#complete-span");
        
        if(currentSpan.innerHTML==="✕"){
            currentSpan.innerHTML="✓";
        }
        else {
            currentSpan.innerHTML="✕";
        }

        let allJobs = JSON.parse(localStorage.getItem("jobs"));
        allJobs[selectedIndex].isCompleted = !allJobs[selectedIndex].isCompleted;
        context.setJobsArray(allJobs);
        localStorage.setItem("jobs" , JSON.stringify(allJobs));
    }


    const deleteJob = (event) => {
        const liArray = [...document.querySelectorAll(".list-item")];
        const currentLi = event.target.parentNode.parentNode;
        const selectedIndex = liArray.indexOf(currentLi);
        
        let allJobs = JSON.parse(localStorage.getItem("jobs"));
        allJobs.splice(selectedIndex , 1);
        context.setJobsArray(allJobs);
        localStorage.setItem("jobs" , JSON.stringify(allJobs));
    }


    const handleDragStart = (event) => {
        event.target.classList.add("dragged");
    }

    const handleDragEnd = (event) => {
        event.target.classList.remove("dragged");
    }

    const handleDragOver = (event) => {
        event.preventDefault();
        const draggedTag = document.querySelector(".dragged");

        if(event.target===draggedTag){
            return;
        }
    }

    const handleDrop = (event) => {
        event.preventDefault();
        const draggedTag = document.querySelector(".dragged");
        const dropTarget = event.target;

        if(dropTarget===draggedTag){
            return;
        }

        const liArray = [...document.querySelectorAll(".list-item")];
        const draggedIndex = liArray.indexOf(draggedTag);
        const dropIndex = liArray.indexOf(dropTarget);
        
        let allJobs = JSON.parse(localStorage.getItem("jobs"));
        const draggedJob = allJobs.splice(draggedIndex , 1)[0];
        allJobs.splice(dropIndex , 0 , draggedJob);
        context.setJobsArray(allJobs);
        localStorage.setItem("jobs" , JSON.stringify(allJobs));
    }

    
    
    if(context.jobsArray.length>0){
        return (
            <>
                {context.jobsArray.map(job => {
                    return (
                        <li className={`list-item ${job.isCompleted ? "green-item" : "blue-item"}`} key={Math.random()}
                        draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd}
                        onDragOver={handleDragOver} onDrop={handleDrop}>
                            <span id="job-span">
                                {job.name}
                            </span>
                            <span id="detail-span">
                                <span id="complete-span" onClick={completeJob}>
                                    {job.isCompleted ? "✕" : "✓"}
                                </span>
                                <span id="delete-span" onClick={deleteJob}>
                                    ⌧
                                </span>
                            </span>
                        </li>
                    );
                })}
            </>
        );
    }
    else {
        return <li className="empty">Nothing to show...</li>
    }
}

export default ListItem;