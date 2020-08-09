import React from "react";
import "./styles.css";
import Buscador from "./Components/Buscador/Buscador";
import EffectExample from "./Components/EffectExample/EffectExample";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div ClassName="container">
        <Buscador />
        <EffectExample />
      </div>
    </div>
  );
}
