import React from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './Nav.js'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Nav />
                <img src={logo} className="App-logo" alt="logo" />
                <p>Welcome to your epicportfolio!</p>
            </header>
        </div>
    )
}

export default App
