import React, { createContext, useState, useEffect } from "react";
import localData from "../data/profiles.json"; // Dữ liệu tĩnh

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profiles, setProfiles] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Sử dụng dữ liệu local thay vì gọi API
        setProfiles(localData);
    }, []);

    const nextProfile = () => {
        setCurrentIndex((prev) => (prev + 1) % profiles.length);
    };

    return (
        <ProfileContext.Provider value={{ profiles, currentIndex, nextProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};
