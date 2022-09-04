import React , { useState } from "react";
import "./App.css"
import Form from "./Form";
import List from "./List";

const App = () => {

    const jobs = localStorage.getItem("jobs") ? JSON.parse(localStorage.getItem("jobs")) : [];
    
    const [jobsArray , setJobsArray] = useState(jobs);

    return (
        <div id="app">
            <Form jobsArray={jobsArray} setJobsArray={setJobsArray}/>
            <List jobsArray={jobsArray} setJobsArray={setJobsArray}/>
        </div>
    );
}

export default App;