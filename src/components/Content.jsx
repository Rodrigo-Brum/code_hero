import React from 'react'
import '../css/Content.css'
import Character from './Character'

export default props => (
    <section className="content">
        <div id="div-master">
            <h1>Busca de personagens</h1>
            <p>Nome do Personagem</p>
            
            <Character />
        </div>
    </section>
)