import React from 'react';

const HelpModal = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div className="modal" onClick={onClose} style={show ? { display: 'flex', alignItems: 'center' } : ""}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Como Jogar</h2>
                <p>Descubra a palavra certa em 6 tentativas. Depois de cada tentativa, as peças mostram o quão perto
                    você está da solução.</p>

                <div className="example">
                    <span className="letter right">T</span>
                    <span className="letter">U</span>
                    <span className="letter">R</span>
                    <span className="letter">M</span>
                    <span className="letter">A</span>
                </div>
                <p>A letra <span className="letter right">T</span> faz parte da palavra e está na posição correta.</p>

                <div className="example">
                    <span className="letter">V</span>
                    <span className="letter">I</span>
                    <span className="letter place">O</span>
                    <span className="letter">L</span>
                    <span className="letter">A</span>
                </div>
                <p>A letra <span className="letter place">O</span> faz parte da palavra mas em outra posição.</p>

                <div className="example">
                    <span className="letter">P</span>
                    <span className="letter">U</span>
                    <span className="letter">L</span>
                    <span className="letter wrong">G</span>
                    <span className="letter">A</span>
                </div>
                <p>A letra <span className="letter wrong">G</span> não faz parte da palavra.</p>

                <p>Os acentos são preenchidos automaticamente, e não são considerados nas dicas.</p>
                <p>As palavras podem possuir letras repetidas.</p>
            </div>
        </div>
    );
};

export default HelpModal;