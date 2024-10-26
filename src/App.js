import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import SignPage from './components/SignPage';
import Tasks from "./components/Tasks";
import Community from "./components/Community";
import './assets/index.css';

function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signpage" element={<SignPage />} />
                    <Route path="/tasks" element={<Tasks/>} />
                    <Route path="/community" element={<Community/>} />
                </Routes>
            </Router>
    );
}

export default App;
