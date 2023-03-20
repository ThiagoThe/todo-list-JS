import { useState } from "react";
import "./App.css";
import CardAdicionar from "./components/CardAdicionar";

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([
    { id: 1, texto: "Estudar React", finalizado: false },
  ]);

  function adicionarTarefa(tarefa) {
    /**
     * receber o texto da tarefa
     * criar um objeto tarefa
     * set na lista de tarefas
     * criar uma nova lista com todas as tarefas
     */

    const novaTarefa = {
      id: listaDeTarefas.length + 1,
      texto: tarefa,
      finalizado: false,
    }; //criado um objeto tarefa

    // Sempre que for copiar um objeto ou array, é necessário usar o spread operator
    const novalistaGeral = [...listaDeTarefas];
    novalistaGeral.push(novaTarefa); //adiciona a nova tarefa na lista geral

    setListaDeTarefas(novalistaGeral);
  }

  return (
    <div className="App">
      <CardAdicionar adicionarTarefa={adicionarTarefa} />

      {listaDeTarefas.map((tarefa) => (
        <li key={tarefa.id}>{tarefa.texto}</li>
      ))}
    </div>
  );
}

export default App;
