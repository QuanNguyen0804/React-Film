import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.scss";
import Slideshow from "./components/Slideshow/SLideshow";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/films" replace />} />
                <Route path="/films" element={<Home />} />
                <Route path="/film/:slug" element={<Details />} />
                <Route path="/slide" element={<Slideshow />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
