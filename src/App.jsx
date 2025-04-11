import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileProvider } from "./context/ProfileContext";
import Home from "./pages/Home.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
    return (
        <ProfileProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </BrowserRouter>
        </ProfileProvider>
    );
}

export default App;
