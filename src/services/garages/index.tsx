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
export type GarageDTO = {
  placeId: string;
};

export async function postNewGarage(dto: GarageDTO) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.post(base + "/place-garage", dto, { headers });
    return response.data;
  } catch (e) {
    console.warn(e);
  }
}

export async function deleteGarage(id: number) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.delete(base + "/place-garage/" + id, { headers });
    return response.data;
  } catch (e) {
    console.warn(e);
  }
}
