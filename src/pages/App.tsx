import { Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import Session from "./session";

export default function Garage() {
  return (
    <Grid className="garage">
      <Router>
        <Routes>
          <Route path="/session" element={<Session />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </Grid>
  );
}
