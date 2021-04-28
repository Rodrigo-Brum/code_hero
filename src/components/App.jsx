import '../css/App.css'
import React from 'react'
import Header from './Header'
import Content from './Content'

export default props => (
    <div className="app">
        <Header />
        <Content />
    </div>
)