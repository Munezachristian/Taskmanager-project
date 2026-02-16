import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-4 space-y-2 h-fit">
      <div className="flex items-center gap-3 text-white font-semibold mb-4">
        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">M</span>
        </div>
        <span>Muneza</span>
      </div>
      <button 
        onClick={() => navigate("/dashboard")}
        className="w-full flex items-center gap-3 px-4 py-3 bg-purple-600 bg-opacity-50 rounded-lg text-white hover:bg-opacity-70 transition"
      >
        <span>⚡</span>
        <span>My Actions</span>
      </button>
      <button 
        onClick={() => navigate("/mail")}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 rounded-lg text-gray-300 transition"
      >
        <span>✉️</span>
        <span>Mail</span>
      </button>
      <button 
        onClick={() => navigate("/notes")}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 rounded-lg text-gray-300 transition"
      >
        <span>📝</span>
        <span>Notes</span>
      </button>
      <button 
        onClick={() => navigate("/apps")}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 rounded-lg text-gray-300 transition"
      >
        <span>📱</span>
        <span>Apps</span>
      </button>
      <button 
        onClick={() => navigate("/projects")}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 rounded-lg text-gray-300 transition"
      >
        <span>📂</span>
        <span>Projects</span>
      </button>
      
      <div className="pt-4">
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition">
          + New Task
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
