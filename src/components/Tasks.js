import React, { useState, useEffect } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);  // State to hold tasks
  const [newTask, setNewTask] = useState('');  // State to handle new task input
  const [editTaskId, setEditTaskId] = useState(null);  // State for editing
  const [editedTask, setEditedTask] = useState('');  // Edited task input

  // Fetch tasks from mock JSON database (useEffect runs on mount)
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    setTasks(data);
  };

  // Add a new task
  const addTask = async () => {
    const newTaskObj = { task: newTask, completed: false };
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTaskObj),
    });
    const data = await response.json();
    setTasks([...tasks, data]);  // Update task list
    setNewTask('');  // Clear input field
  };

  // Edit an existing task
  const editTask = async (id) => {
    const updatedTask = { ...tasks.find(task => task.id === id), task: editedTask };
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });
    const data = await response.json();
    setTasks(tasks.map(task => task.id === id ? data : task));  // Update task list
    setEditTaskId(null);  // Close edit mode
    setEditedTask('');  // Clear edit input
  };

  // Delete or mark a task as completed
  const completeTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter(task => task.id !== id));  // Remove task from list
  };

  return (
    <div>
      <h2>Tasks</h2>

      {/* Display Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  placeholder={task.task}
                />
                <button onClick={() => editTask(task.id)}>Save</button>
              </>
            ) : (
              <>
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.task}
                </span>
                <button onClick={() => { setEditTaskId(task.id); setEditedTask(task.task); }}>
                  Edit
                </button>
                <button onClick={() => completeTask(task.id)}>
                  Complete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
       {/* Add Task Section */}
       <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default Tasks;
