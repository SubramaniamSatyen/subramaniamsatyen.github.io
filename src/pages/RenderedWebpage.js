import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

//Rerturn webpage as route header and page body, with endpoints further protected under RequireAuth component
const RenderedWebpage = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/experience" element={<Home />} />
                    <Route path="/projects" element={<Home />} />
                    <Route path="/contact" element={<Home />} />                        
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default RenderedWebpage;