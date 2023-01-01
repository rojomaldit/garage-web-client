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

export type RentDTO = {
  rentType: string;
  amountForTime: number;
  vehicle: number;
  placeGarage: number;
};

export async function postNewRent(dto: RentDTO) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.post(base + "/rent", dto, { headers });
    return response.data;
  } catch (e) {
    console.warn(e);
  }
}

export async function rentCollet(id:number) {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(base + "/rent/collect" + id, { headers });
    return response.data;
  } catch (e) {
    console.warn(e);
  }
}
