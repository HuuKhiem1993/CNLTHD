import React from "react";

function ProfileCard({ profile }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">📄 Hồ sơ người dùng</h2>
            <div className="space-y-2 text-gray-700 text-lg">
                <p><strong>Tên:</strong> {profile.name}</p>
                <p><strong>Tuổi:</strong> {profile.age}</p>
                <p><strong>Nghề nghiệp:</strong> {profile.job}</p>
            </div>
        </div>
    );
}

export default React.memo(ProfileCard);
