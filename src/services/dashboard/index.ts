import axios from "axios";
import { base, token } from "../VARIABLES";

export type RentHistory = {
  type: string;
  totalToCollect: number;
  history: {
    amountCollected: number;
    collectedOn: number;
    rentId: number;
  };
};

export async function getAllRentsHistory() {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(base + "/rent-history", { headers });
    return response.data;
  } catch (e) {
    console.warn(e);
  }
}
