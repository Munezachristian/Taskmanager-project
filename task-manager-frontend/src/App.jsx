import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Mail from "./pages/Mail";
import Notes from "./pages/Notes";
import Apps from "./pages/Apps";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <div className="max-w-7xl mx-auto px-6 pb-16">
                    <div className="flex gap-6">
                      <Sidebar />
                      <Dashboard />
                    </div>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/mail" 
              element={
                <ProtectedRoute>
                  <div className="max-w-7xl mx-auto px-6 pb-16">
                    <div className="flex gap-6">
                      <Sidebar />
                      <div className="flex-1">
                        <Mail />
                      </div>
                    </div>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/notes" 
              element={
                <ProtectedRoute>
                  <div className="max-w-7xl mx-auto px-6 pb-16">
                    <div className="flex gap-6">
                      <Sidebar />
                      <div className="flex-1">
                        <Notes />
                      </div>
                    </div>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/apps" 
              element={
                <ProtectedRoute>
                  <div className="max-w-7xl mx-auto px-6 pb-16">
                    <div className="flex gap-6">
                      <Sidebar />
                      <div className="flex-1">
                        <Apps />
                      </div>
                    </div>
                  </div>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/projects" 
              element={
                <ProtectedRoute>
                  <div className="max-w-7xl mx-auto px-6 pb-16">
                    <div className="flex gap-6">
                      <Sidebar />
                      <div className="flex-1">
                        <Projects />
                      </div>
                    </div>
                  </div>
                </ProtectedRoute>
              } 
            />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
