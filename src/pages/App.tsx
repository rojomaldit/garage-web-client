import { Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Session from "./session";

export default function Garage() {
  return (
    <Grid className="garage">
      <Router>
        <Routes>
          <Route path="/session" element={<Session />} />
        </Routes>
      </Router>
    </Grid>
  );
}
