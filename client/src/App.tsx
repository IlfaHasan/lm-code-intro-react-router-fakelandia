import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { FakelandiaRouter } from './fakelandiaRouter'

import './App.css'

function App() {  
  return (    
    <BrowserRouter>
    <FakelandiaRouter/>
    </BrowserRouter>           
  )
}
export default App
