import { Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasicMenu from "../components/BasicMenu";
import Dashboard from "./dashboard";
import Garages from "./garages";
import Session from "./session";
import Vehicles from "./vehicles";

export default function Garage() {
  const applyMenu = (e: JSX.Element) => <BasicMenu>{e}</BasicMenu>;
  return (
    <Grid className="garage">
      <Router>
        <Routes>
          <Route path="/session" element={<Session />} />

          <Route path="/dashboard" element={applyMenu(<Dashboard />)} />
          <Route path="/vehicles" element={applyMenu(<Vehicles />)} />
          <Route path="/garages" element={applyMenu(<Garages />)} />
        </Routes>
      </Router>
    </Grid>
  );
}
