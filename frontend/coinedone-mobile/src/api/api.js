import axios from 'axios';

const API_URL = 'http://192.168.1.5:5000'; 

export const registerUser = async (userData) => {
  try {
    return await axios.post(`${API_URL}/api/users/register`, userData);
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    return await axios.post(`${API_URL}/api/users/login`, userData);
  } catch (error) {
    console.error('Error logging in user:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const fetchSchedule = async () => {
  try {
    return await axios.get(`${API_URL}/api/view-work-schedule`);
  } catch (error) {
    console.error('Error fetching schedule:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const saveSchedule = async (scheduleData) => {
  try {
    return await axios.post(`${API_URL}/api/schedules`, scheduleData);
  } catch (error) {
    console.error('Error saving schedule:', error.response ? error.response.data : error.message);
    throw error;
  }
};

