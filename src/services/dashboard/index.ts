import axios from "axios";
import { base, token } from "../VARIABLES";

export type PlaceGarage = {
  id: number;
  placeId: string;
  isAvailable: boolean;
};

export async function getAllPlaceGarage() {
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
