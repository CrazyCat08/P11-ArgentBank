import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
