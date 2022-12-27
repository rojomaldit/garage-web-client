import axios from "axios";
import { base, token } from "../VARIABLES";

export type Garage = {
  id: number;
  createdDate: string;
  placeId: string;
  isAvailable: string;
};

export async function getAllGarage() {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(base + "/place-garage", { headers });
    return response.data;
  } catch (e) {
    console.warn(e);
  }
}
