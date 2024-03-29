import { useReducer, useState } from "react";
import "./App.css";
import CardAdicionar from "./components/CardAdicionar";
import ListItem from "./components/ListItem";

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([
    { id: 1, texto: "Tarefa 1", finalizado: false },
  ]);

  function adicionarTarefa(tarefa) {
    /* 
      1 [x] receber o texto da tarefa
      2 [x] criar o objeto tarefa
      3 [x] set na lista de tarefas*
        3.1 [x] criar uma nova lista com todas as tarefas
        3.2 [x] passar a nova lista para o set
    */
    const novaTarefa = {
      id: listaDeTarefas.length + 1,
      texto: tarefa,
      finalizado: false,
    };

    // sempre que forem copiar um array ou objeto use o spread
    const novaListaGeral = [...listaDeTarefas];
    novaListaGeral.push(novaTarefa);

    setListaDeTarefas(novaListaGeral);
  }

  function removerTarefa(tarefa) {
    // filtra a tarefa selecionada e assim remove ela
    const novaLista = listaDeTarefas.filter((item) => item.id != tarefa.id);

    setListaDeTarefas(novaLista);
  }

  return (
    <div className="App">
      <CardAdicionar adicionarTarefa={adicionarTarefa} />
      {listaDeTarefas.map((tarefa) => (
        <ListItem tarefa={tarefa} removerTarefa={removerTarefa} />
      ))}
    </div>
  );
}

export default App;
