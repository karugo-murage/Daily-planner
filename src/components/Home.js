import React from "react";
import './Home.css'; // Import the CSS file

function Home() {
    return (
        <>
            <header className="header">
                <div className="header-title">Productivity At Its Best</div>
                <ul className="navigation">
                    <li className="nav-item">My Tasks</li>
                    <li className="nav-item">Community</li>
                </ul>
            </header>
            <div className="content">
                <h2>Welcome to Your Productivity Dashboard!</h2>
                <p>Here you can manage your tasks efficiently and connect with your community.</p>
            </div>
        </>
    );
}

export default Home;
