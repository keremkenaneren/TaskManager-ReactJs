import {useContext, useState} from "react";
import TasksContext from "../context/Task.jsx";

function TaskCreate({onCreate}) {

    const {createTask} = useContext(TasksContext)

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changeDesc = (e) => {
        setDesc(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        // onCreate(title, desc);
        createTask(title, desc)
        setTitle("")
        setDesc("")
    }


    return (
        <div className="  ">
            <form className=" text-start my-10" onSubmit={submit}>
                <label htmlFor="taskName" className="md:w-full text-2xl mb-2 font-medium text-gray-900 dark:text-white">Task name :</label>
                <input id="taskName" value={title} onChange={changeTitle} className="md:w-full w-full bg-gray-50 border my-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="TaskName" required />
                <br />
                <label htmlFor="taskDesc" className="md:w-full text-2xl mb-2 font-medium text-gray-900 dark:text-white">Task description :</label>
                <textarea  id="taskDesc" value={desc} onChange={changeDesc} className="md:w-full w-full bg-gray-50 border my-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="TaskDescription" required />

                <button className="w-full my-5" >Add</button>
            </form>
        </div>
    );
}

export default TaskCreate;