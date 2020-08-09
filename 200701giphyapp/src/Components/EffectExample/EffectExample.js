import React, { useState, useEffect } from "react";

function EffectExample() {
  const [cuenta, setCuenta] = useState(0);
  useEffect(() => {
    document.title = cuenta;
  });
  return (
    <div>
      <p>Diste click {cuenta} veces</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          setCuenta(cuenta + 1);
        }}
      >
        Cuenta tus Cliks Campeon!!
      </button>
    </div>
  );
}

export default EffectExample;

