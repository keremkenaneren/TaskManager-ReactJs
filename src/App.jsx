import './App.css'
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {

  return (
    <div>"

      <h1 className='text-6xl font-bold my-6' >--- Please add task ---</h1>

      <TaskCreate />

      <h2 className='text-6xl font-semibold my-6'>Tasks</h2>

      <TaskList />

    </div>
  )
}

export default App;
