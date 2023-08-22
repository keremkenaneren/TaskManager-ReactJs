function TaskCreate() {

    return (
        <div>
            <form className="w-full text-start my-10">
                <label htmlFor="taskName" className=" text-2xl mb-2 font-medium text-gray-900 dark:text-white">Task name :</label>
                <input type="text" id="taskName" className="bg-gray-50 border my-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="TaskName" required />
                <br />
                <label htmlFor="taskDesc" className=" text-2xl mb-2 font-medium text-gray-900 dark:text-white">Task description :</label>
                <textarea type="text" id="taskDesc" className="bg-gray-50 border my-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="TaskDescription" required />

                <button className="w-full my-5">Add</button>
            </form>
        </div>
    );
}

export default TaskCreate;