// criar um input para receber o texto da tarefa
// criar um usestate para receber o texto da tarefa
// criar um botão para chamar o método de adicionar tarefa
// criar a lógica da função de adicionar tarefa

import { useState } from "react";
import "./cardAdicionar.css";

function CardAdicionar({ adicionarTarefa }) {
  // guarda o valor do texto da tarefa
  const [tarefa, setTarefa] = useState("");

  const handleAdicionar = (evento) => {
    // previne para não acontecer o comportamento padrão de submit do botão
    evento.preventDefault();

    // verifica se o input de texto não está vazio
    if (tarefa != "") {
      // envia o texto da tarefa para ser criada e adicionada a lista de tarefas
      adicionarTarefa(tarefa);

      // limpa o input do texto
      setTarefa("");
    }
  };

  return (
    <div>
      <h2>To Do List</h2>
      {/* input do texto da tarefa */}
      <input
        className="input-tarefa"
        placeholder="adicionar tarefa"
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      {/* botão para chamar a função para criar a tarefa */}
      <button className="button-add" onClick={handleAdicionar}>
        Adicionar
      </button>
    </div>
  );
}

export default CardAdicionar;
