import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import {useState} from "react";

function App() {

    const [tasks, setTasks] = useState([]);
    const createTask = (title, desc) => {
        const createdTask = [
            ...tasks,{
                id:Math.round(Math.random()*999999),
                title,
                desc,
            },
        ];
        setTasks(createdTask);
    }

    const deleteTask = (id) => {
        const afterDeletingTask = tasks.filter((task) => {
            return task.id !== id;
        })
        setTasks(afterDeletingTask)
    }


    return (
        <div>
            <h1 className='text-6xl font-bold my-6' > Please add task </h1>
            <TaskCreate onCreate={createTask} />
            <h2 className='text-6xl font-semibold my-6'>Tasks</h2>
            <TaskList tasks={tasks} del={deleteTask} />
        </div>
    )
}

export default App;
