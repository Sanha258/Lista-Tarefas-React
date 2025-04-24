import { useState } from 'react';
import Todo from './components/Todo';
import "./App.css";
import Todoform from './components/Todoform';
import Alert from './components/Alert';
import Pesquisa from './components/Pesquisa';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Tarefas de Trabalho",
      category: "Trabalho",
      priority: "importante",
      isCompleted: false,
      startDate: "2023-06-01",
      endDate: "2023-06-10"
    },
    {
      id: 2, 
      text: "Tarefas de academia",
      category: "Pessoal",
      priority: "relevante",
      isCompleted: false,
      startDate: "2023-06-05",
      endDate: "2023-06-15"
    },
    {
      id: 3,
      text: "Tarefas de faculdade",
      category: "Faculdade",
      priority: "urgente",
      isCompleted: false,
      startDate: "2023-06-10",
      endDate: "2023-06-20"
    },
  ]);

  const [alert, setAlert] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000);
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const addTodo = (newTodo) => {
    const todoWithId = {
      ...newTodo,
      id: Math.floor(Math.random() * 10000),
      isCompleted: false,
      createdAt: new Date().toISOString()
    };
    setTodos([...todos, todoWithId]);
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

  const filteredTodos = todos.filter(todo => {
    const matchesSearch = searchTerm === '' || 
      todo.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || 
      todo.category === categoryFilter;
      
    const matchesPriority = priorityFilter === 'all' || 
      todo.priority === priorityFilter;
    
    return matchesSearch && matchesCategory && matchesPriority;
  });

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      
      <Pesquisa 
        onSearch={setSearchTerm}
        onFilter={setCategoryFilter}
        onPriorityFilter={setPriorityFilter}
      />
      
      <Todoform addTodo={addTodo} showAlert={showAlert} />
      
      <div className="todos-container">
        <div className='todo-list'>
          {filteredTodos.map((todo) => (
            <Todo 
              key={todo.id} 
              todo={todo} 
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
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