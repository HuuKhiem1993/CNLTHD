import React, { useContext, useCallback } from "react";
import { ProfileContext } from "../context/ProfileContext";
import ProfileCard from "../components/ProfileCard";
import ChangeProfileButton from "../components/ChangeProfileButton";
import { Link } from "react-router-dom";

function ProfilePage() {
    const { profiles, currentIndex, nextProfile } = useContext(ProfileContext);

    const handleNext = useCallback(() => {
        nextProfile();
    }, [nextProfile]);

    if (profiles.length === 0)
        return <p className="text-center mt-10 text-gray-500">Đang tải dữ liệu...</p>;

    return (
        <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-blue-50 flex flex-col items-center justify-center p-6">
            <ProfileCard profile={profiles[currentIndex]} />
            <ChangeProfileButton onClick={handleNext} />
            <Link to="/" className="mt-6 text-blue-600 hover:underline">
                ⬅️ Quay về Trang chủ
            </Link>
        </div>
    );
}

export default ProfilePage;
