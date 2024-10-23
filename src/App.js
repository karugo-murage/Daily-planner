import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Updated import
import Home from './components/Home';
import SignPage from './components/SignPage';
import './assets/index.css';
import Tasks from "./components/Tasks";
import Community from "./components/Community";

function App() {
    return (
        <>
            <Home/>
            <SignPage/>
            <Tasks/>
            <Community/>
        </>
    );
}

export default App;
