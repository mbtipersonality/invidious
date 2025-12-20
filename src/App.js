import './App.css'
import React from 'react'
import search1 from './search'

function App() {
  const handleClick = () => {
    const search2 = JSON.parse(localStorage.getItem('invidious'))
    const randSearch = search2[Math.floor(Math.random() * (search2.length - 1 + 1) + 1 )]
    const newInvidious = search2.filter(item => item !== randSearch)
    localStorage.setItem('invidious', JSON.stringify(newInvidious))
    
    window.location = `https://invidious.f5.si/search?q=${randSearch}`
    
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
