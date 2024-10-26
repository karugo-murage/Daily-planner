import React from "react";
import '../assets/index.css'; 

function Home() {
    const tasks = [
        { id: 1, text: "Hit the gym 💪" },
        { id: 2, text: "Learn React.js 📚" },
        { id: 3, text: "Update my portfolio 💻" },
        { id: 4, text: "Go over coffee with my bestie ☕" },
        { id: 5, text: "Read the Bible 📖" },
    ];
    return (
        <>
            <div className="content">
                <h2>Welcome to Your Productivity Dashboard!</h2>
                <p>Here you can manage your tasks efficiently and connect with our community.</p>
            </div>
            <div className="task-list">
                    {tasks.map((task) => (
                        <div key={task.id} className="task-item">
                            <span className="task-text">{task.text}</span>
                            <div className="task-buttons">
                                <button className="edit-button">Edit</button>
                                <button className="complete-button">Completed</button>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Home;
