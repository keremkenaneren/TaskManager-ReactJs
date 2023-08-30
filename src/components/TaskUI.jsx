function TaskUI({task , onDelete}) {
    console.log(task)

    const clickDelete = () => {
        onDelete(task.id)
    }

    return (
        <div className="border border-b-gray-50 p-7 rounded-xl text-start mx-5 my-5">
            <p className="text-xl mb-2 font-medium text-gray-900 dark:text-white">{task.title}</p>
            <hr/>
            <p className="text-xl mb-2 font-medium text-gray-900 dark:text-white">{task.desc}</p>
            <div className="mt-7 mb-2">
                <button onClick={clickDelete} >Delete</button>
            </div>
        </div>
    );
}

export default TaskUI ;
