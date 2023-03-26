import { useState } from "react";

export function ListItem({ tarefa, removerTarefa }) {
  const [finalizado, setFinalizado] = useState(false);

  function handleFinalizado() {
    setFinalizado(true);
  }

  return (
    <div>
      <li className={finalizado ? "finalizado" : ""} onClick={handleFinalizado}>
        {tarefa.texto}
        <button
          className="btn btn-danger"
          onClick={() => removerTarefa(tarefa.id)}
        >
          Finalizar
        </button>
      </li>
    </div>
  );
}
