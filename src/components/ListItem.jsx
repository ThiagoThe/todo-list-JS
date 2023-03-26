import { useState } from "react";
import "./listItem.css";

function ListItem({ tarefa, removerTarefa }) {
  // guarda o valor da tarefa e se ela está finalizada ou não
  const [finalizado, setFinalizado] = useState(false);

  // finaliza a tarefa
  function finalizarTarefa(e) {
    // previne para não acontecer o comportamento padrão do botão submit
    e.preventDefault();

    // se estiver falso vai se tornar verdadeiro e vice-versa
    setFinalizado(!finalizado);
  }

  // função para remover a tarefa
  function handleRemoverTarefa(e) {
    // previne para não acontecer o comportamento padrão do botão submit
    e.preventDefault();

    // chama a função que remove a tarefa
    removerTarefa(tarefa);
  }
  return (
    <div>
      {
        //renderização condicional
        finalizado ? (
          //li com marcação de finalizado
          <li key={tarefa.id} className={"list-item finalizado"}>
            {tarefa.texto}
            <button
              className="list-item-button-finaliza"
              onClick={finalizarTarefa}
            >
              Finalizar
            </button>
            <button
              className="list-item-button-remove"
              onClick={handleRemoverTarefa}
            >
              Remover
            </button>
          </li>
        ) : (
          // li sem marcação de finalizado
          <li key={tarefa.id} className={"list-item"}>
            {tarefa.texto}
            <button
              className="list-item-button-finaliza"
              onClick={finalizarTarefa}
            >
              Finalizar
            </button>
            <button
              className="list-item-button-remove"
              onClick={handleRemoverTarefa}
            >
              Remover
            </button>
          </li>
        )
      }
    </div>
  );
}

export default ListItem;
