import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BasicMenu from "../components/BasicMenu";
import Dashboard from "./dashboard";
import Garages from "./garages";
import Session from "./session";
import Vehicles from "./vehicles";

export default function Garage() {
  const [token, setToken] = useState<string>(localStorage.getItem("access_token") || "");

  useEffect(() => {
    const expiration = localStorage.getItem("token_expiration");

    // validate expiration
    if (expiration) {
      const expirationDate = new Date(expiration);
      if (expirationDate < new Date()) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("token_expiration");
        setToken("");
      }
    }

    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  if (!token) {
    return <Session setToken={setToken} />;
  }

  const applyMenu = (e: JSX.Element) => <BasicMenu>{e}</BasicMenu>;
  return (
    <Grid className="garage">
      <Router>
        <Routes>
          <Route path="/dashboard" element={applyMenu(<Dashboard />)} />
          <Route path="/vehicles" element={applyMenu(<Vehicles />)} />
          <Route path="/garages" element={applyMenu(<Garages />)} />
        </Routes>
      </Router>
    </Grid>
  );
}
