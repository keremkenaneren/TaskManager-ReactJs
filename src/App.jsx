import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import {useContext, useEffect} from "react";
import axios from "axios";
import TasksContext from "./context/Task.jsx";

function App() {

    const {fetchTasks} = useContext(TasksContext);


    useEffect(()=>{
        fetchTasks()
    }, [])



    // ContextApi uydurmak için Props sildik
    return (
        <div>
            <h1 className='text-6xl font-bold my-6' > Please add task </h1>
            <TaskCreate />
            <h2 className='text-6xl font-semibold my-6'>Tasks</h2>
            <TaskList />
        </div>
    )
}

export default App;
