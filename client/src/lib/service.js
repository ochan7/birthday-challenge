import axios from 'axios';
const endPoint = `http://localhost:8081/api/birthdays`;

export const loadData = () => axios.get(endPoint);
