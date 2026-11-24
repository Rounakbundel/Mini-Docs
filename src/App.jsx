import React from 'react'
import'./App.css'
import './index.css'
import Background from './components/background'
import Foreground from './components/Foreground'
import Card from './components/card'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-800'>
      <Background/>
      <Foreground/>
    
    </div>
  )
}

export default App;