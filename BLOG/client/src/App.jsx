import { useState } from "react";
import "./App.css";
import { Rutas } from "./routes/routes";

function App() {
  return (
    <div className="layout">
      <h1> Blog con React </h1>
      <Rutas />
    </div>
  );
}

export default App;
