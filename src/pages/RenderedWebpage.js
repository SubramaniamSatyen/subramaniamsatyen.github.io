import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import { useState, useEffect } from "react";

import Home from "../pages/Home";
import NavBar from "../components/NavBar";
import Experience from "./Experience";
import Projects from "./Projects";
import Awards from "./Awards"
import Search from "./Search"
import Footer from "../components/Footer";

function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
}

//Rerturn webpage as route header and page body, with endpoints further protected under RequireAuth component
const RenderedWebpage = () => {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
      });
        
      useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
          });
        }, 100);
    
        window.addEventListener("resize", debouncedHandleResize);
    
        return (_) => {
          window.removeEventListener("resize", debouncedHandleResize);
        };
    });

    return (
        <div className="App">
          <ParallaxProvider>
            <BrowserRouter>
              <NavBar dimensions={dimensions} />
                <Routes>
                  <Route exact path="/" element={<Home dimensions={dimensions} />} />
                  <Route path="/experience" element={<Experience dimensions={dimensions} />} />
                  <Route path="/projects" element={<Projects dimensions={dimensions} />} />
                  <Route path="/awards" element={<Awards dimensions={dimensions} />} />
                  <Route path="/search" element={<Search dimensions={dimensions} />} />
                  <Route path="*" element={<Navigate dimensions={dimensions} to="/" replace />} />
                </Routes>
              <Footer dimensions={dimensions}/>
            </BrowserRouter>
          </ParallaxProvider>
        </div>
    )
}

export default RenderedWebpage;