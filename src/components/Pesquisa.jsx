import React, { useState } from 'react';
import './Pesquisa.css';
import { FaSearch, FaFilter, FaExclamation } from 'react-icons/fa';

function Pesquisa({ onSearch, onFilter, onPriorityFilter }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [priorityFilter, setPriorityFilter] = useState('all');

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    const handleCategoryFilter = (e) => {
        const selectedFilter = e.target.value;
        setCategoryFilter(selectedFilter);
        onFilter(selectedFilter);
    };

    const handlePriorityFilter = (e) => {
        const selectedPriority = e.target.value;
        setPriorityFilter(selectedPriority);
        onPriorityFilter(selectedPriority);
    };

    return (
        <div className="search-filter-box">
            <h1 className="box-title">Filtrar Tarefas</h1>
            
            <div className="search-filter-content">
                {/* Barra de Pesquisa */}
                <div className="form-group">
                    <label htmlFor="search">Pesquisar:</label>
                    <div className="input-with-icon">
                        <input
                            id="search"
                            type="text"
                            placeholder="Digite o texto da tarefa..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="search-input"
                        />
                        <FaSearch className="input-icon" />
                    </div>
                </div>

                {/* Filtro por Categoria */}
                <div className="form-group">
                    <label htmlFor="category-filter"><FaFilter /> Categoria:</label>
                    <select
                        id="category-filter"
                        value={categoryFilter}
                        onChange={handleCategoryFilter}
                        className="filter-select"
                    >
                        <option value="all">Todas categorias</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Pessoal">Pessoal</option>
                        <option value="Faculdade">Faculdade</option>
                    </select>
                </div>

                {/* Novo: Filtro por Prioridade */}
                <div className="form-group">
                    <label htmlFor="priority-filter"><FaExclamation /> Importância:</label>
                    <select
                        id="priority-filter"
                        value={priorityFilter}
                        onChange={handlePriorityFilter}
                        className="filter-select"
                    >
                        <option value="all">Todas</option>
                        <option value="urgente">Urgente</option>
                        <option value="importante">Importante</option>
                        <option value="relevante">Relevante</option>
                        <option value="nao-relevante">Não Relevante</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Pesquisa;