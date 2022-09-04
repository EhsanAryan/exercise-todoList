import React , { useState , useContext} from "react";
import "./Form.css";
import AppContext from "../context/AppContext";


const Form = () => {

    const [job , setJob] = useState("");

    const context = useContext(AppContext);

    
    // Event Handlers
    const changeJobFiled = (event) => {
        setJob(event.target.value);
    }

    const checkJob = () => {
        if(job===""){
            alert("Fill the job field!");
            return;
        }
        else {
            const newJob = {name: job , isCompleted: false};
            context.setJobsArray([...context.jobsArray , newJob]);
            localStorage.setItem("jobs" , JSON.stringify([...context.jobsArray , newJob]));

            setJob("");
        }
    }

    const checkJobWithKeyboard = (event) => {
        if(event.key==="Enter"){
            checkJob();
        }
    }


    return (
        <div id="job-form">
            <input type="text" id="job-input" placeholder="Job..." value={job}
            onKeyDown={checkJobWithKeyboard} onChange={changeJobFiled}/>
            <button type="button" id="submit-btn" onClick={checkJob}>Submit</button>
        </div>
    );
}

export default Form;