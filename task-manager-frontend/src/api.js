import axios from 'axios';
cons api=axios.create({
    baseURL:'http://localhost:5000/api',
});
export default api;