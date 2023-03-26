import { useState } from "react";
import "./App.css";
import CardAdicionar from "./components/CardAdicionar";
import { ListItem } from "./components/ListItem";

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

  function removerTarefa(id) {
    const novaListaDeTarefas = listaDeTarefas.filter(
      (tarefa) => tarefa.id !== id
    );
    setListaDeTarefas(novaListaDeTarefas);
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <CardAdicionar adicionarTarefa={adicionarTarefa} />

      {listaDeTarefas.map((tarefa) => (
        <ListItem
          key={tarefa.id}
          tarefa={tarefa}
          removerTarefa={removerTarefa}
        />
      ))}
    </div>
  );
}

export default App;
