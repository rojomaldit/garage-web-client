import axios from 'axios';

// get base from congig
const base = "http://localhost:3000";

export async function logIn(username: string, password: string) { 
  try {
    const response = await axios.post(base + '/login', { username, password });
    return response.data;
  } catch (e) {
    console.warn(e);
  }
}