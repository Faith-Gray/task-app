import { useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'

function App() {
  const [tasks, setTasks] = useState(
    {
      taskName: ""
    }
  )
  
  function handleChange(event) {
    const {name, value} = event.target
    setTasks(prevTask => ({
      ...prevTask,
      [name]: value
    }))
  
  }

  function handleSubmit(event) {
    event.preventDefault()
    
    console.log(tasks)
  }

  return (
    <> 
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Task"
          className="form--input"
          name="taskName"
          onChange={handleChange}
          value={tasks.taskName}
          key={name}

        />
        <button onClick={handleToggle}>Submit</button>
      </form>
    </>
  )

  const handleToggle = (key) => {
    let mapped = ToDoList.map(task => {
      return task.id == key ? { ...task, complete: !task.complete } : { ...task};
    });
    setTasks(mapped);
  }
}

export default App

// Our application will be made of two components, App and Overview. Your application should render an input field and a submit button. With the submit button, you can add the content from your input to a “tasks array” that is managed in state. (We will use class components for this example because we haven’t introduced hooks in this section yet). Finally, for each task in the tasks array, an HTML list element should be rendered

// The page will have a form input to put in tasks and a submit button
//once a task is submitted it will be added to an array of tasks. 
// The overview component will list all of the tasks and the app component will push the tasks to the page using state.

