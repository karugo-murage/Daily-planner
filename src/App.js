import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Updated import
import Home from './components/Home';
import SignPage from './components/SignPage';
// import './assets/App.css';
import './assets/index.css';

function App() {
    return (
        <>
            <Home/>
            <SignPage/>
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
