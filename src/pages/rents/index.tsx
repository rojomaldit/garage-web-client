import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import BasicTable from "../../components/kit/BasicTable";
import MenuTop from "../../components/MenuTop";
import CreateNew_Modal from "../../components/Rents/Create_New_Modal";
import {
  deleteRent,
  getAllRents,
  getTotalToCollect,
  Rent,
  rentCollet,
  TotalToCollectData,
} from "../../services/rents";
import { rentTypeToES } from "../../services/rents";
import DeleteIcon from "@mui/icons-material/Delete";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";

const defaultTotalToCollectData = {
  totalRents: 0,
  totalToCollectByRent: [],
  totalToCollect: 0,
};

export default function Rents() {
  const [OpenModal, setOpenModal] = useState(false);
  const [rentsData, setRentsData] = useState<Rent[]>([]);
  const [rentCollectData, setCollectData] = useState<TotalToCollectData>(
    defaultTotalToCollectData
  );

  const handleRentsData = () => {
    (async () => {
      const data = await getAllRents();
      if (data !== undefined) setRentsData(data);
    })();
  };
  useEffect(handleRentsData, []);

  const handleTotalToCollectData = () => {
    (async () => {
      const data = await getTotalToCollect();
      if (data !== undefined) setCollectData(data);
    })();
  };
  useEffect(handleTotalToCollectData, []);

  const handleCollect = (id: number) => {
    (async () => {
      await rentCollet(id);
    })();
  };

  const handleDeletedRent = (id: number) => {
    (async () => {
      const data = await deleteRent(id);

      if (data !== undefined) handleRentsData();
    })();
  };

  return (
    <Grid className="rents">
      <Grid>
        <MenuTop
          title="Rentas"
          button={{
            title: "Crear Nuevo",
            onClick: () => setOpenModal(true),
          }}
        />
      </Grid>
      <Grid>
        <BasicTable
          options={[
            {
              startIcon: <DeleteIcon />,
              label: "Eliminar",
              onClick: (rowIndex: number) => {
                const rent = rentsData[rowIndex];

                handleDeletedRent(rent.id);
              },
            },
            {
              startIcon: <SavingsRoundedIcon />,
              label: "Cobrar",
              onClick: (rowIndex: number) => {
                const rent = rentsData[rowIndex];
                handleCollect(rent.id);
                handleTotalToCollectData();
              },
            },
          ]}
          columns={[
            "Fecha de inicio",
            "Tipo de renta",
            "Precio",
            "Ultima fecha de cobro",
            "Total a cobrar",
          ]}
          rows={rentsData.map((rent) => [
            rent.startDate.split("T")[0],
            rentTypeToES(rent.rentType),
            rent.amountForTime.toString(),
            rent.lastDateCollected.split("T")[0],
            rentCollectData.totalToCollectByRent
              .find((e) => e.rentId === rent.id)
              ?.totalToCollect.toString() || "",
          ])}
        />
      </Grid>
      <CreateNew_Modal
        updatePage={handleRentsData}
        openModal={OpenModal}
        setOpenModal={setOpenModal}
      />
    </Grid>
  );
}
