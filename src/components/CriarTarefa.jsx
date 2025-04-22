import React, { useState } from 'react'

function CriarTarefa() {
    const [titulo, setTitulo] = useState(""); // Inicializando como string vazia
  
    return (
      <input
        type="text"
        value={titulo} // Sempre controlado
        onChange={(e) => setTitulo(e.target.value)} // Atualiza estado
        placeholder="Digite o título"
      />
    );
  }

export default CriarTarefa;
