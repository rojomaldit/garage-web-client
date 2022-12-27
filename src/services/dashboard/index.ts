import axios from "axios";
import { base, token } from "../VARIABLES";

export type TotalToCollect = {
  totalToCollect: number;
};

export async function getTotalToCollect() {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(base + "/rent/total-to-collect", {
      headers,
    });
    return response.data;
  } catch (e) {
    console.warn(e);
  }
}
