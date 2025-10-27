const express = require('express');
const cors = require('cors');
const pool=require('./db');

const app = express();
app.use(cors());
app.use(express.json());


//Get allTasks
app.get('/api/tasks', async (req,res)=>{
  try{
    const allTasks=await pool.query('SELECT * FROM tasks order by id ASC');
    res.json(allTasks.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});


//Get one task by id
app.get('/api/tasks/:id', async (req, res) => {
  try{
    const {id}=req.params;
    const task=await pool.query('SELECT * FROM tasks WHERE id=$1',[id]);
    if(task.rows.length===0)
      return res.status(404).json({ message: 'Task not found' });
      res.json(task.rows[0]);
    
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});


//create new task
app.post('/api/tasks', async (req, res) => {
  try {
    const {title, discription,status}=req.body;
    const newTask=await pool.query('INSERT INTO tasks (title, discription,status) VALUES ($1, $2,$3) RETURNING *',[title,description,status]);
    res.json(newTask.rows[0]);
  }catch(error){
    console.error(error.message);
    res.status(500).json({message: 'Internal server error'});
  } 
});


//Update tasks
app.put('/api/tasks/:id', async (req, res) => {
  try{
    const {id} =req.params;
    const {title, discription,status}=req.body;
    const updateTask=await pool.query('UPDATE tasks SET title=$1, discription=$2, status=$3 WHERE id=$4 RETURNING *',[title,description,status,id]);
    if(updateTask.rows.length===0)
      return res.status(404).json({ message: 'Task not found' });
      res.json(updateTask.rows[0]);
  }catch (error) {
    console.error(error.message);
    res.status(500).json({message: 'Internal server error'});

  }
});


//Delete task

app.delete('/api/tasks/:id', async (req, res) => {
  try{
    const {id}=req.params;
    const deleteTask=await pool.query('DELETE FROM tasks WHERE id=$1 RETURNING *',[id]);
    if(deleteTask.rows.length===0)
      return res.status(404).json({ message: 'Task not found' });
    res.status(204).json({ message: 'Task deleted successfully' });
} catch (error){
  console.error(error.message);
  res.status(500).json({message: 'Internal server error'});
}
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 