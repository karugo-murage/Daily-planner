import React, { useState, useEffect } from 'react';
import '../assets/index.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks');
    const data = await response.json();
    setTasks(data);
  };

  const addTask = async () => {
    const newTaskObj = { task: newTask, completed: false };
    const response = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTaskObj),
    });
    const data = await response.json();
    setTasks([...tasks, data]);
    setNewTask('');
  };

  const editTask = async (id) => {
    const updatedTask = { ...tasks.find(task => task.id === id), task: editedTask };
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });
    const data = await response.json();
    setTasks(tasks.map(task => task.id === id ? data : task));
    setEditTaskId(null);
    setEditedTask('');
  };

  const completeTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <h2 className='tasks-head'>Tasks</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            {editTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  placeholder={task.task}
                />
                <button onClick={() => editTask(task.id)} className="edit-button">Save</button>
              </>
            ) : (
              <>
                <span className="task-text">{task.task}</span>
                <div className="task-buttons">
                  <button onClick={() => { setEditTaskId(task.id); setEditedTask(task.task); }} className="edit-button">
                    Edit
                  </button>
                  <button onClick={() => completeTask(task.id)} className="complete-button">
                    Complete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className='addtask'>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTask}>Add Task</button>
      </div>

    </>
  );
};

export default Tasks;

