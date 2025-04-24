import React from 'react';
import { FaCalendarAlt, FaTag } from 'react-icons/fa';
import BarraProgresso from './BarraProgresso';

const Todo = ({ todo, completeTodo, removeTodo }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div className={`todo priority-${todo.priority} ${todo.isCompleted ? 'completed' : ''}`}>
      <div className="todo-header">
        <span className={`priority-badge priority-${todo.priority}`}>
          {{
            'urgente': 'Urgente',
            'importante': 'Importante',
            'relevante': 'Relevante',
            'nao-relevante': 'Não Relevante'
          }[todo.priority]}
        </span>
        <h3>{todo.text}</h3>
      </div>
      
      <div className="todo-content">
        <div className="todo-meta">
          <span><FaTag /> {todo.category}</span>
          
          {todo.startDate && todo.endDate && (
            <span className="date-range-display">
              <FaCalendarAlt /> {formatDate(todo.startDate)} → {formatDate(todo.endDate)}
            </span>
          )}
        </div>
        
        {todo.tags?.length > 0 && (
          <div className="todo-tags">
            {todo.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
        
        {todo.startDate && todo.endDate && (
          <BarraProgresso 
            startDate={todo.startDate} 
            endDate={todo.endDate} 
          />
        )}
      </div>
      
      <div className="todo-actions">
        <button onClick={() => completeTodo(todo.id)}>
          {todo.isCompleted ? 'Desfazer' : 'Completar'}
        </button>
        <button onClick={() => removeTodo(todo.id)}>Excluir</button>
      </div>
    </div>
  );
};

export default Todo;