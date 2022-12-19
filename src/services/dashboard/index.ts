import axios from "axios";
import { base, token } from "../VARIABLES";

export type PlaceGarage = {
  id: number;
  placeId: string;
  isAvailable: boolean;
};

export type TotalToCollect = {
  totalToCollect: number;
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
