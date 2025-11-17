import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {

    const randSearch = search[Math.floor(Math.random() * (727 - 1 + 1) + 1 )]
    
    window.location = `https://yewtu.be/search?q=${randSearch}`
    
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
