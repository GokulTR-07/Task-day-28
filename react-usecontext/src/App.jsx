import { useState } from 'react'
import './App.css'
import Home from './Home'
import { CartProvider } from './Context'

function App() {

  return (
    <CartProvider>
      <Home/>
    </CartProvider>
    
  )
}

export default App
