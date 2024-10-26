import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import SignPage from './components/SignPage';
import Tasks from "./components/Tasks";
import Community from "./components/Community";
import './assets/index.css';
import { Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <header className="header">
                <div className="header-title">Productivity At Its Best</div>
                <ul className="navigation">
                <li className="nav-item"><Link to="/"><button>Home</button></Link></li>
                    <li className="nav-item"><Link to="/tasks"><button>My Tasks</button></Link></li>
                    <li className="nav-item"><Link to="/community"><button>Community</button></Link></li>
                    <li className="nav-item"><Link to="/signpage"><button>Sign Up</button></Link></li>
                </ul>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signpage" element={<SignPage />} />
                <Route path="/tasks" element={<Tasks/>} />
                <Route path="/community" element={<Community/>} />
            </Routes>
            <footer className="sticky-footer">
                <div>"Yesterday you said today, JUST DO IT"</div>
            </footer>
        </Router>
    );
}

export default App;
