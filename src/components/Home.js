
import React from "react";

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
                {/* Additional content can go here */}
            </div>
        </>
    );
}

export default Home;
