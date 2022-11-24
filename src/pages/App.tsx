import { Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import Garages from "./garages";
import Session from "./session";
import Vehicles from "./vehicles";

export default function Garage() {
  return (
    <Grid className="garage">
      <Router>
        <Routes>
          <Route path="/session" element={<Session />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/garages" element={<Garages />} />
        </Routes>
      </Router>
    </Grid>
  );
}
