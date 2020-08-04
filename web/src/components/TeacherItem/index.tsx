import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/33328994?s=460&u=b87115c771ae2d5d18b7f4d9f076e7ec0894ce1c&v=4" alt="Avatar"/>
                <div>
                    <strong>Leonardo Guilen</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Ensinando progração com alegria.
                <br/><br/>
                Inspirado em novas tecnologias e por ensinar as mesmas para seus alunos. 
            </p>

            <footer>
                <p>
                  Preço/hora
                  <strong>R$ 80,00</strong>
                </p>    
                <button type="button">
                   <img src={whatsappIcon} alt="Whatsapp"/> 
                   Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;