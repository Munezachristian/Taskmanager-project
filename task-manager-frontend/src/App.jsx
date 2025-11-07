import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Send out invitations", description: "Email all stakeholders", status: "in_progress", progress: 65 },
    { id: 2, title: "Send out email", description: "Marketing campaign", status: "completed", progress: 100 },
    { id: 3, title: "Design landing page", description: "New product launch", status: "in_progress", progress: 45 },
    { id: 4, title: "Design onboarding", description: "User experience flow", status: "pending", progress: 20 }
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddTask = () => {
    if (!title || !description) return;
    const newTask = {
      id: Date.now(),
      title,
      description,
      status,
      progress: status === "completed" ? 100 : status === "in_progress" ? 50 : 0
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    setStatus("pending");
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (task) => {
    setEditId(task.id);
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
    setShowForm(true);
  };

  const handleUpdate = () => {
    if (!title || !description) return;
    setTasks(tasks.map((task) => 
      task.id === editId 
        ? { ...task, title, description, status, progress: status === "completed" ? 100 : status === "in_progress" ? 50 : 0 }
        : task
    ));
    setEditId(null);
    setTitle("");
    setDescription("");
    setStatus("pending");
    setShowForm(false);
  };

  const getStatusColor = (status) => {
    if (status === "completed") return "bg-green-500";
    if (status === "in_progress") return "bg-blue-500";
    return "bg-gray-500";
  };

  const unstartedTasks = tasks.filter(t => t.status === "pending");
  const inProgressTasks = tasks.filter(t => t.status === "in_progress");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      
      {/* Navigation Bar */}
      <nav className="bg-black bg-opacity-40 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-white font-semibold text-xl">Muneza</span>
              </div>
              <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
                <button className="hover:text-white">Products ▼</button>
                <button className="hover:text-white">Use Cases ▼</button>
                <button className="hover:text-white">Learn ▼</button>
                <button className="hover:text-white">Pricing</button>
                <button className="hover:text-white">Enterprise</button>
                <button className="hover:text-white">Request Demo</button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-300 hover:text-white text-sm">Contact Sales</button>
              <button className="text-gray-300 hover:text-white text-sm">Login</button>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-semibold px-6 py-2 rounded-lg text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

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
        <button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-semibold px-8 py-3 rounded-lg text-lg shadow-xl">
          Get Started
        </button>
      </div>

      {/* Dashboard Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex gap-6">
          
          {/* Sidebar */}
          <div className="w-64 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-4 space-y-2 h-fit">
            <div className="flex items-center gap-3 text-white font-semibold mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span>Muneza</span>
            </div>
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-purple-600 bg-opacity-50 rounded-lg text-white">
              <span>⚡</span>
              <span>My Actions</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 rounded-lg text-gray-300">
              <span>✉️</span>
              <span>Mail</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 rounded-lg text-gray-300">
              <span>📝</span>
              <span>Notes</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 rounded-lg text-gray-300">
              <span>📱</span>
              <span>Apps</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 rounded-lg text-gray-300">
              <span>📂</span>
              <span>Projects</span>
            </button>
            
            <div className="pt-4">
              <button 
                onClick={() => setShowForm(!showForm)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg"
              >
                + New Task
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            
            {/* Form Modal */}
            {showForm && (
              <div className="bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-2xl p-6 mb-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {editId ? "Update Task" : "Add New Task"}
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-gray-700 border-gray-600 border text-white p-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400"
                  />
                  <textarea
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-gray-700 border-gray-600 border text-white p-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-400"
                  />
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full bg-gray-700 border-gray-600 border text-white p-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  >
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                  <div className="flex gap-3">
                    <button
                      onClick={editId ? handleUpdate : handleAddTask}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg"
                    >
                      {editId ? "Update" : "Add Task"}
                    </button>
                    <button
                      onClick={() => {
                        setShowForm(false);
                        setEditId(null);
                        setTitle("");
                        setDescription("");
                        setStatus("pending");
                      }}
                      className="px-6 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Project Board */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-white">Muneza Product</h2>
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 text-sm">Hours tracked by project</span>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs font-semibold">
                      24h
                    </div>
                  </div>
                </div>
              </div>

              {/* Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Unstarted Column */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-300 font-semibold">Unstarted</h3>
                    <span className="text-gray-500">{unstartedTasks.length}</span>
                  </div>
                  <div className="space-y-3">
                    {unstartedTasks.map((task) => (
                      <div key={task.id} className="bg-gray-700 bg-opacity-50 rounded-xl p-4 border border-gray-600 hover:border-gray-500 transition-all">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-medium">{task.title}</h4>
                          <button className="text-gray-400 hover:text-white">⋮</button>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{task.description}</p>
                        <div className="w-full bg-gray-600 rounded-full h-2 mb-3">
                          <div className={`${getStatusColor(task.status)} h-2 rounded-full`} style={{width: `${task.progress}%`}}></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-orange-400 text-sm">⚠️</span>
                            <span className="text-gray-400 text-xs">📎 2</span>
                          </div>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => handleEdit(task)}
                              className="text-yellow-400 hover:text-yellow-300 text-xs px-2 py-1 bg-gray-600 rounded"
                            >
                              Edit
                            </button>
                            <button 
                              onClick={() => handleDelete(task.id)}
                              className="text-red-400 hover:text-red-300 text-xs px-2 py-1 bg-gray-600 rounded"
                            >
                              Del
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button className="w-full border-2 border-dashed border-gray-600 hover:border-gray-500 rounded-xl p-4 text-gray-400 hover:text-gray-300">
                      + Add new action
                    </button>
                  </div>
                </div>

                {/* In Progress Column */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-300 font-semibold">In progress</h3>
                    <span className="text-gray-500">{inProgressTasks.length}</span>
                  </div>
                  <div className="space-y-3">
                    {inProgressTasks.map((task) => (
                      <div key={task.id} className="bg-gray-700 bg-opacity-50 rounded-xl p-4 border border-gray-600 hover:border-gray-500 transition-all">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-medium">{task.title}</h4>
                          <button className="text-gray-400 hover:text-white">⋮</button>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{task.description}</p>
                        <div className="w-full bg-gray-600 rounded-full h-2 mb-3">
                          <div className={`${getStatusColor(task.status)} h-2 rounded-full`} style={{width: `${task.progress}%`}}></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-orange-400 text-sm">⚠️</span>
                            <span className="text-gray-400 text-xs">📎 {Math.floor(Math.random() * 5)}</span>
                          </div>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => handleEdit(task)}
                              className="text-yellow-400 hover:text-yellow-300 text-xs px-2 py-1 bg-gray-600 rounded"
                            >
                              Edit
                            </button>
                            <button 
                              onClick={() => handleDelete(task.id)}
                              className="text-red-400 hover:text-red-300 text-xs px-2 py-1 bg-gray-600 rounded"
                            >
                              Del
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button className="w-full border-2 border-dashed border-gray-600 hover:border-gray-500 rounded-xl p-4 text-gray-400 hover:text-gray-300">
                      + Add new action
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;