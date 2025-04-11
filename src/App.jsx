import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileProvider } from "./context/ProfileContext"; // ✅ Đúng đường dẫn
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";

function App() {
    return (
        <ProfileProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile/:id" element={<ProfilePage />} />
                </Routes>
            </BrowserRouter>
        </ProfileProvider>
    );
}

export default App;
