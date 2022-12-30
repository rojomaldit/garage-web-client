import { base, token } from "../VARIABLES";
import axios from "axios";

export type Rent = {
  id: number;
  startDate: string;
  rentType: string;
  amountForTime: number;
  totalAmountCharged: number;
  lastDateCollected: string;
};
/*
'Hourly',
'Daily',
'Weekly',
'Monthly',
'Yearly',
*/

export function rentTypeToES(rentType: string) {
  switch (rentType) {
    case "Hourly":
      return "Por Hora";
    case "Daily":
      return "Por Día";
    case "Weekly":
      return "Por Semana";
    case "Monthly":
      return "Por Mes";
    case "Yearly":
      return "Por Año";

    default:
      return "-";
  }
}

export async function getAllRents() {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(base + "/rent", { headers });
    return response.data;
  } catch (e) {
    console.warn(e);
  }
}

/*export type VehicleDTO = {
  licensePlate: string;
  vehicleType: string;
  phoneNumber?: string;
  notes?:string;
};
*/

/*export async function postNewVehicle(dto: VehicleDTO) {
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
*/
