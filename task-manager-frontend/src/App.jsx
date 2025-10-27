import { use, useEffect,useState } from "react";
import api from "./api";

function App() {
    const [tasks, setTasks] = useState([]);
    //const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res=await api.get("/tasks");
                setTasks(res.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };
        
        fetchTasks();
    }, []);
    
    return (
        <div style={{padding:"20px"}}>
            <h1>Task Manager</h1>
            {tasks.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <strong>{task.title}</strong> - {task.completed ? "Completed" : "Pending"}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
