import './App.css'
import React from 'react'
import search1 from './search'

function App() {
  const handleClick = () => {

    const search2 = JSON.parse(localStorage.getItem('invidious'))
    if(!search2){
      localStorage.setItem('invidious', JSON.stringify(search1))
      return
    }
    const randSearch = search2[Math.floor(Math.random() * (search2.length - 1 + 1) + 1 )]

    const newInvidious = search2.filter(item => item !== randSearch)
    localStorage.setItem('invidious', JSON.stringify(newInvidious))
    
    window.location = `https://inv.nadeko.net/search?q=${randSearch}`
    
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
