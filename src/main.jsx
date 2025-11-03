// Lokasi: src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// Perbarui path import. './' berarti di folder yang sama.
import Exercise from "./Exercise.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Exercise />
  </React.StrictMode>
);