import { useState } from 'react';
import Todo from './components/Todo';
import "./App.css";
import Todoform from './components/Todoform';
import Alert from './components/Alert';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Tarefas de Trabalho",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2, 
      text: "Tarefas de academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Tarefas de faculdade",
      category: "Faculdade",
      isCompleted: false,
    },
  ]);

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const addTodo = (text, category) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    showAlert('Tarefa criada com sucesso!', 'success');
  };

  const completeTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    showAlert('Tarefa excluída com sucesso!', 'error'); 
  };

return (
  <div className='app'>
    <h1>Lista de Tarefas</h1>
    <Todoform addTodo={addTodo} showAlert={showAlert} />
    <div className='todo-list'>
      {todos.map((todo) => (
        <Todo 
          key={todo.id} 
          todo={todo} 
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
    
    {alert && (
      <Alert 
        message={alert.message} 
        type={alert.type} 
        onClose={closeAlert} 
      />
    )}
  </div>
);

}

export default App;