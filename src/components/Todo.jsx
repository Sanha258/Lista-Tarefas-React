import React from 'react'

const Todo = ({ todo, completeTodo, removeTodo }) => {
  return (
    <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
      <div className='content'>
        <p>{todo.text}</p>
        <p><strong>Categoria:</strong> {todo.category}</p>
      </div>
      <div className="actions">
        <button onClick={() => completeTodo(todo.id)}>
          {todo.isCompleted ? 'Desfazer' : 'Completar'}
        </button>
        <button onClick={() => removeTodo(todo.id)}>Excluir</button>
      </div>
    </div>
  )
}

export default Todo;