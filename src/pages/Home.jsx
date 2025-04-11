import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <div className="text-center p-8 bg-white/10 rounded-xl shadow-lg backdrop-blur-md">
                <h1 className="text-4xl font-bold mb-4">Chào mừng đến với</h1>
                <h2 className="text-2xl font-semibold mb-6">Ứng dụng Xem Hồ Sơ</h2>
                <Link
                    to="/profile"
                    className="bg-white text-indigo-700 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
                >
                    ➡️ Vào trang hồ sơ
                </Link>
            </div>
        </div>
    );
}

export default Home;
