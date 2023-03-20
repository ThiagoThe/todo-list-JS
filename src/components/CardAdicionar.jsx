// criar um input para receber o texto da tarefa
// criar um usestate para receber o texto da tarefa
// criar um botão para chamar o método de adicionar tarefa
// criar a lógica da função de adicionar tarefa
import { React } from "react";
import { useState } from "react";

function CardAdicionar({ adicionarTarefa }) {
  const [tarefa, setTarefa] = useState(""); //texto significa o que o usuário digitar no input e setTexto é a função que vai atualizar o texto

  const handleAdicionar = (evento) => {
    // Adicionar a tarefa na lista de tarefas
    evento.preventDefault(); //previne o comportamento padrão do botão (recarregar a página)
    if (tarefa != "") {
      adicionarTarefa(tarefa);
      setTarefa(""); //limpa o input
    }
  };

  return (
    <div>
      <input
        type="text"
        value={tarefa}
        // Atualiza o estado do texto com o valor do input
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button onClick={handleAdicionar}>Adicionar</button>
    </div>
  );
}

export default CardAdicionar;
