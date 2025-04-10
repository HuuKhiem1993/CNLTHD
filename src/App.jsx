import React, { useState } from 'react';
import Greeting from './components/Greeting';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
    const profiles = [
        { name: 'Nam', age: 22, job: 'Lập trình viên' },
        { name: 'Linh', age: 24, job: 'Nhà thiết kế UI/UX' },
        { name: 'Khôi', age: 21, job: 'Tester phần mềm' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChangeProfile = () => {
        setCurrentIndex((prev) => (prev + 1) % profiles.length);
    };

    return (
        <div className="app-container">
            <Greeting />
            <ProfileCard profile={profiles[currentIndex]} onChange={handleChangeProfile} />
        </div>
    );
}

export default App;
