import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import ProfileCard from "../components/ProfileCard";

const ProfilePage = () => {
    const { id } = useParams();
    const { profiles } = useContext(ProfileContext);

    const profileIndex = parseInt(id, 10); // Chuyển từ chuỗi sang số
    const profile = profiles[profileIndex];

    if (!profiles.length) {
        return <div className="text-center p-4">Đang tải dữ liệu...</div>;
    }

    if (!profile) {
        return <div className="text-center p-4 text-red-500">Không tìm thấy hồ sơ!</div>;
    }

    return <ProfileCard profile={profile} />;
};

export default ProfilePage;
