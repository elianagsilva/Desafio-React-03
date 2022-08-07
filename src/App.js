import React from "react";

export default class App extends React.Component {
  state = {
    tarefa: "",
    lista: []
  };
  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value
    });
  };
  add = () => {
    if (this.state.tarefa !== "" && !this.state.tarefa.match(/^[ \t]+$/)) {
      this.setState({
        lista: this.state.lista.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
  };
  enter = (e) => {
    if (this.state.tarefa.length > 0 && e.key === "Enter") {
      this.setState({
        lista: this.state.lista.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
  };
  remove = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => item.id !== id)
    });
  };
  render() {
    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <input
          onChange={this.handleChange}
          onKeyPress={this.enter}
          value={this.state.tarefa}
        />
        <button onClick={this.add}>Adicionar</button>
        {this.state.lista.map((item) => (
          <div>
            <ul key={item.id}>
              <li>{item.tarefa}</li>
            </ul>
            <button onClick={() => this.remove(item.id)}>Remover</button>
          </div>
        ))}
      </div>
    );
  }
}