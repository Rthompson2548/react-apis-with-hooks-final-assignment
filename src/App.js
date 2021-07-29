
// useEffect()
// Update this app to retreive a list of ToDo's from the jsonplaceholder API. 
// Use this starter code for the application. You will, of course, need to add 
// appropriate logic to make the application work.

// Load the data from https://jsonplaceholder.typicode.com/todos?userId=2

// Success Criteria
// Functionality:
// ToDo's for userID 2 are loaded using fetch() and useEffect()
// fetch() is called exactly once
// Fetched ToDo's are displayed to the user

import React, { useEffect, useLayoutEffect, useState } from "react"
export default App


function App() {
  // const [toDos, setToDos] = useState([])
  const [userId, setUserId] = useState(1)

  useEffect(() => {
    setUserId({})
    async function loadUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=2")
      const userFromAPI = await response.json()
      setUserId(userFromAPI)
    }
    loadUsers()
  }, [userId])

  if (userId === 2) {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul className="todo-list">
        {toDos.map((todo) => (
          <li
            value = {user.userId}
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  ) 
} 
return null
}
