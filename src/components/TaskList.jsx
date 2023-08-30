import TaskUI from "./TaskUI.jsx";

function TaskList({tasks , del}) {
    return (
        <div className="flex flex-wrap" >
            {
                tasks.map((task, index) => {
                    return <TaskUI key={index} task={task} onDelete={del} />
                })
            }
        </div>
    );
}

export default TaskList;