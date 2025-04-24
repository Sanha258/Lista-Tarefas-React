import { useState } from 'react';
import { FaCalendarAlt, FaExclamation } from 'react-icons/fa';

const Todoform = ({ addTodo, showAlert }) => {
  const [formData, setFormData] = useState({
    text: "",
    category: "",
    priority: "relevante",
    startDate: "",
    endDate: "",
    tags: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'startDate' && prev.endDate && value > prev.endDate ? { endDate: value } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.text.trim() || !formData.category) {
      showAlert("Título e categoria são obrigatórios!", "warning");
      return;
    }
    
    addTodo(formData);
    setFormData({
      text: "",
      category: "",
      priority: "relevante",
      startDate: "",
      endDate: "",
      tags: []
    });
  };

  return (
    <div className="todo-form">
      <h2>Criar Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título da Tarefa*</label>
          <input
            type="text"
            name="text"
            placeholder="Descreva sua tarefa..."
            value={formData.text}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Categoria Principal*</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Faculdade">Faculdade</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label><FaExclamation /> Importância</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className={`priority-select priority-${formData.priority}`}
            >
              <option value="urgente">Urgente</option>
              <option value="importante">Importante</option>
              <option value="relevante">Relevante</option>
              <option value="nao-relevante">Não Relevante</option>
            </select>
          </div>

          <div className="form-group">
            <label><FaCalendarAlt /> Período (Opcional)</label>
            <div className="date-range">
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleDateChange}
                placeholder="Início"
              />
              <span>até</span>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleDateChange}
                placeholder="Fim"
                min={formData.startDate}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Criar Tarefa
        </button>
      </form>
    </div>
  );
};

export default Todoform;