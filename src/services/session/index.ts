import axios from "axios";
import { base } from "../VARIABLES";

export async function logIn(username: string, password: string) {
  try {
    const response = await axios.post(base + "/login", { username, password });
    return response.data;
  } catch (e) {
    console.warn(e);
  }
}
