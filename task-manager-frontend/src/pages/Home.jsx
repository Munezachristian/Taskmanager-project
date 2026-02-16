import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Project management on your terms,
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            #successguaranteed
          </h2>
        </div>
        <p className="text-gray-400 text-lg mb-8">Best in class. Zero risk. People-friendly.</p>
        <button 
          onClick={() => navigate("/dashboard")}
          className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-semibold px-8 py-3 rounded-lg text-lg shadow-xl"
        >
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-white font-semibold text-lg mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Experience blazing fast performance with our optimized platform.</p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-white font-semibold text-lg mb-2">Secure</h3>
            <p className="text-gray-400">Your data is protected with enterprise-grade security.</p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-white font-semibold text-lg mb-2">Collaborative</h3>
            <p className="text-gray-400">Work together seamlessly with your team in real-time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
