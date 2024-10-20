import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Updated import
import Home from './components/Home';
import Signup from './components/Signup';
import './assets/App.css';

function App() {
    return (
        <>
            <Home/>
        </>
        // <Router>
        //     <div>
        //         <Routes> {/* Use Routes instead of Switch */}
        //             <Route path="/" element={<Home />} /> {/* Updated syntax for Route */}
        //             <Route path="/signup" element={<Signup />} />
        //         </Routes>
        //     </div>
        // </Router>
    );
}

export default App;
