import React , { useState } from "react";
import "./App.css"
import Form from "./Form";
import List from "./List";
import AppContext from "../context/AppContext";

const App = () => {

    const jobs = localStorage.getItem("jobs") ? JSON.parse(localStorage.getItem("jobs")) : [];
    
    const [jobsArray , setJobsArray] = useState(jobs);

    return (
        <div id="app">
            <AppContext.Provider value={{
                jobsArray ,
                setJobsArray
            }}>
                <Form />
                <List />
            </AppContext.Provider>
        </div>
    );
}

export default App;