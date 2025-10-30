import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [editId, setEditId] = useState(null);

  //  Fetch All Tasks (GET /api/tasks)
  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  //  Add New Task (POST /api/tasks)
  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/tasks", {
        title,
        discription: description,
        status,
      });
      setTasks([...tasks, res.data]); // update state
      setTitle("");
      setDescription("");
      setStatus("pending");
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  //  Delete Task (DELETE /api/tasks/:id)
  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter((task) => task.id !== id)); // remove deleted task from UI
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  //  Set Edit Mode (Fill inputs with selected task)
  const handleEdit = (task) => {
    setEditId(task.id);
    setTitle(task.title);
    setDescription(task.discription);
    setStatus(task.status);
  };

  // Update Task (PUT /api/tasks/:id)
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/tasks/${editId}`, {
        title,
        discription: description,
        status,
      });

      setTasks(tasks.map((task) => (task.id === editId ? res.data : task)));

      // Reset form after update
      setEditId(null);
      setTitle("");
      setDescription("");
      setStatus("pending");
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

return (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
    <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-md border border-gray-200 space-y-6">

      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
        📝 Task Manager
      </h1>
      <hr className="border-gray-200" />

      {/* Form */}
      <form onSubmit={editId ? handleUpdate : handleAddTask} className="space-y-4">

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border-gray-300 border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full border-gray-300 border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border-gray-300 border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all"
        >
          {editId ? "Update Task" : "Add Task"}
        </button>

      </form>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <h2 className="font-semibold text-lg text-gray-800">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>

            <span
              className={`inline-block mt-2 px-3 py-1 text-xs rounded-full font-medium
                ${task.status === "completed" ? "bg-green-100 text-green-700" :
                  task.status === "in_progress" ? "bg-yellow-100 text-yellow-700" :
                  "bg-gray-100 text-gray-600"}`}
            >
              {task.status}
            </span>

            <div className="mt-3 flex gap-2">

              <button
                onClick={() => handleEdit(task)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Delete
              </button>

            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
);

}


export default App;
