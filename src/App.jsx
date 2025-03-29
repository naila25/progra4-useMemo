import React, { useState, useMemo } from "react";

const DoblarNumero = () => {
  const [numero, setNumero] = useState(1);
  const [contador, setContador] = useState(0);

  // Memoriza el doble del número para evitar cálculos innecesarios
  const doble = useMemo(() => {
    console.log("Calculando el doble...");
    return numero * 2;
  }, [numero]); // Se recalcula solo si "numero" cambia

  return (
    <div>
      <h3>Número: {numero}</h3>
      <h3>Doble: {doble}</h3>

      <button onClick={() => setNumero(numero + 1)}>Aumentar número</button>
      <button onClick={() => setContador(contador + 1)}>Aumentar contador ({contador})</button>
    </div>
  );
};
//El botón "Aumentar contador" NO afecta el cálculo del doble
export default DoblarNumero;
