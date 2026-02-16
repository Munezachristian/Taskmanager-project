import { useState } from "react";

function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Send out invitations", description: "Email all stakeholders", status: "in_progress", progress: 65, priority: "high", dueDate: "2026-02-20" },
    { id: 2, title: "Send out email", description: "Marketing campaign", status: "completed", progress: 100, priority: "medium", dueDate: "2026-02-18" },
    { id: 3, title: "Design landing page", description: "New product launch", status: "in_progress", progress: 45, priority: "high", dueDate: "2026-02-25" },
    { id: 4, title: "Design onboarding", description: "User experience flow", status: "pending", progress: 20, priority: "low", dueDate: "2026-03-01" }
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const handleAddTask = () => {
    if (!title || !description) return;
    const newTask = {
      id: Date.now(),
      title,
      description,
      status,
      priority,
      dueDate,
      progress: status === "completed" ? 100 : status === "in_progress" ? 50 : 0
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    setStatus("pending");
    setPriority("medium");
    setDueDate("");
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
    setPriority(task.priority);
    setDueDate(task.dueDate);
    setShowForm(true);
  };

  const handleUpdate = () => {
    if (!title || !description) return;
    setTasks(tasks.map((task) => 
      task.id === editId 
        ? { ...task, title, description, status, priority, dueDate, progress: status === "completed" ? 100 : status === "in_progress" ? 50 : 0 }
        : task
    ));
    setEditId(null);
    setTitle("");
    setDescription("");
    setStatus("pending");
    setPriority("medium");
    setDueDate("");
    setShowForm(false);
  };

  const getStatusColor = (status) => {
    if (status === "completed") return "bg-green-500";
    if (status === "in_progress") return "bg-blue-500";
    return "bg-gray-500";
  };

  const getPriorityColor = (priority) => {
    if (priority === "high") return "text-red-400 bg-red-500 bg-opacity-20";
    if (priority === "medium") return "text-yellow-400 bg-yellow-500 bg-opacity-20";
    return "text-blue-400 bg-blue-500 bg-opacity-20";
  };

  const getPriorityLabel = (priority) => {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  const getUrgencyStatus = (dueDate, status) => {
    if (status === "completed") return { label: "✓ Completed", color: "text-green-400" };
    if (!dueDate) return { label: "No deadline", color: "text-gray-400" };
    
    const today = new Date();
    const due = new Date(dueDate);
    const daysLeft = Math.ceil((due - today) / (1000 * 60 * 60 * 24));

    if (daysLeft < 0) return { label: "🔴 Overdue", color: "text-red-400" };
    if (daysLeft === 0) return { label: "⚠️ Due Today", color: "text-orange-400" };
    if (daysLeft <= 3) return { label: `⏰ Due in ${daysLeft}d`, color: "text-orange-400" };
    return { label: `📅 ${daysLeft}d left`, color: "text-green-400" };
  };

  const filteredTasks = tasks.filter(task => {
    const priorityMatch = filterPriority === "all" || task.priority === filterPriority;
    const statusMatch = filterStatus === "all" || task.status === filterStatus;
    return priorityMatch && statusMatch;
  });

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === "completed").length,
    pending: tasks.filter(t => t.status === "pending").length,
    inProgress: tasks.filter(t => t.status === "in_progress").length,
    completionRate: tasks.length ? Math.round((tasks.filter(t => t.status === "completed").length / tasks.length) * 100) : 0
  };

  return (
    <div>
      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-4 border border-gray-700 text-center">
          <div className="text-2xl font-bold text-white">{stats.total}</div>
          <p className="text-gray-400 text-sm">Total</p>
        </div>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-4 border border-gray-700 text-center">
          <div className="text-2xl font-bold text-green-400">{stats.completed}</div>
          <p className="text-gray-400 text-sm">Completed</p>
        </div>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-4 border border-gray-700 text-center">
          <div className="text-2xl font-bold text-blue-400">{stats.inProgress}</div>
          <p className="text-gray-400 text-sm">In Progress</p>
        </div>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-4 border border-gray-700 text-center">
          <div className="text-2xl font-bold text-yellow-400">{stats.pending}</div>
          <p className="text-gray-400 text-sm">Pending</p>
        </div>
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-4 border border-gray-700 text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.completionRate}%</div>
          <p className="text-gray-400 text-sm">Completion</p>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-2xl p-6 mb-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">{editId ? "Update Task" : "Add Task"}</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg">
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg" />
            <div className="flex gap-3">
              <button onClick={editId ? handleUpdate : handleAddTask} className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg">{editId ? "Update" : "Add"}</button>
              <button onClick={() => { setShowForm(false); setEditId(null); setTitle(""); setDescription(""); setStatus("pending"); setPriority("medium"); setDueDate(""); }} className="px-6 bg-gray-700 text-white py-3 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Tasks */}
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-white">Tasks</h2>
          <div className="flex gap-3">
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg"><option value="all">All Status</option><option value="pending">Pending</option><option value="in_progress">In Progress</option><option value="completed">Completed</option></select>
            <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)} className="bg-gray-700 border border-gray-600 text-white px-4 py-2 rounded-lg"><option value="all">All Priority</option><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select>
          </div>
        </div>
        <div className="space-y-3">
          {filteredTasks.length === 0 ? <p className="text-gray-400 text-center py-8">No tasks</p> : filteredTasks.map((task) => { const urgency = getUrgencyStatus(task.dueDate, task.status); return (
            <div key={task.id} className="bg-gray-700 bg-opacity-50 rounded-xl p-4 border border-gray-600">
              <div className="flex justify-between mb-2"><div><h4 className="text-white font-medium">{task.title}</h4><p className="text-gray-400 text-sm">{task.description}</p></div><button className="text-gray-400">⋮</button></div>
              <div className="flex gap-2 mb-3 flex-wrap"><span className={`text-xs px-3 py-1 rounded-full ${getPriorityColor(task.priority)}`}>{getPriorityLabel(task.priority)}</span><span className={`text-xs ${urgency.color}`}>{urgency.label}</span><span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">{task.status === "in_progress" ? "🔵" : task.status === "completed" ? "✓" : "⏳"}</span></div>
              <div className="w-full bg-gray-600 rounded-full h-2 mb-3"><div className={`${getStatusColor(task.status)} h-2 rounded-full`} style={{width: `${task.progress}%`}}></div></div>
              <div className="flex justify-between"><div className="text-xs text-gray-400">{task.progress}%</div><div className="flex gap-2"><button onClick={() => handleEdit(task)} className="text-yellow-400 text-xs px-3 py-1 bg-gray-600 rounded">Edit</button><button onClick={() => handleDelete(task.id)} className="text-red-400 text-xs px-3 py-1 bg-gray-600 rounded">Delete</button></div></div>
            </div>
          ); })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
