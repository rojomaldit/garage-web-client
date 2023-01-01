import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import BasicTable from "../../components/kit/BasicTable";
import MenuTop from "../../components/MenuTop";
import CreateNew_Modal from "../../components/Rents/Create_New_Modal";
import { getAllRents, Rent, rentCollet } from "../../services/rents";
import { rentTypeToES } from "../../services/rents";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";

export default function Rents() {
  const [OpenModal, setOpenModal] = useState(false);
  const [rentsData, setRentsData] = useState<Rent[]>([]);

  const handleRentsData = () => {
    (async () => {
      const data = await getAllRents();
      if (data !== undefined) setRentsData(data);
    })();
  };
  useEffect(handleRentsData, []);

  const handleCollectData = (id: number) => {
    (async () => {
      await rentCollet(id);
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
              startIcon: <SavingsRoundedIcon />,
              label: "Cobrar",
              onClick: (rowIndex: number) => {
                const rent = rentsData[rowIndex];

                handleCollectData(rent.id);
              },
            },
            
          ]}
          columns={[
            "Fecha de inicio",
            "Tipo de renta",
            "Precio",
            "Ultima fecha de cobro",
          ]}
          rows={rentsData.map((rent) => [
            rent.startDate.split("T")[0],
            rentTypeToES(rent.rentType),
            rent.amountForTime.toString(),
            rent.lastDateCollected.split("T")[0],
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
