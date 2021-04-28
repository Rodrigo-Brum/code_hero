import '../css/Header.css'
import logo from '../assets/imgs/logo.png'
import React from 'react'

export default props => (
    <header className="header">
       <img src={logo} alt="logo" id='logo'/>
       <div id="group">
            <div id="div-span">
                <span id="name">Rodrigo Brum </span>
                <br className='br-header'/>
                <span id="span-text">Teste de Front-end </span>
            </div>

            <div id="div-cb"> 
                <span id="cb">CB</span>
            </div>
       </div>
    </header>
)