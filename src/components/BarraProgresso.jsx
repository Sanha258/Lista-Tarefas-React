import React from 'react';
import './BarraProgresso.css';

const BarraProgresso = ({ startDate, endDate }) => {
  // Função para calcular o progresso
  const calculateProgress = () => {
    if (!startDate || !endDate) return 0;
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    const today = new Date();
    
    if (today >= end) return 100;
    if (today <= start) return 0;
    
    const total = end - start;
    const elapsed = today - start;
    return Math.min(100, Math.round((elapsed / total) * 100));
  };

  // Função para calcular dias restantes
  const calculateDaysLeft = () => {
    if (!endDate) return null;
    const end = new Date(endDate);
    const today = new Date();
    const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  const progress = calculateProgress();
  const daysLeft = calculateDaysLeft();

  return (
    <div className="time-progress">
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progress-info">
        <span>{progress}% concluído</span>
        {daysLeft !== null && (
          <span>{daysLeft > 0 ? `${daysLeft} dias restantes` : 'Prazo finalizado'}</span>
        )}
      </div>
    </div>
  );
};

export default BarraProgresso;
