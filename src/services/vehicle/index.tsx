import axios from "axios";
import { base, token } from "../VARIABLES";

export type Vehicle = {
  id: number;
  licensePlate: string;
  vehicleType: string;
  phoneNumber: string;
  address: string;
  notes: string;
};

export async function getAllVehicle() {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(base + "/vehicle", { headers });
    return response.data;
  } catch (e) {
    console.warn(e);
  }
}

export type VehicleDTO = {
  licensePlate: string;
  vehicleType: string;
  phoneNumber?: string;
  notes?:string;
};

export async function postNewVehicle(dto: VehicleDTO) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.post(base + "/vehicle", dto, { headers });
    return response.data;
  } catch (e) {
    console.warn(e);
  }
}
