import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Themecontext from './Context/Themecontext.jsx'
import Expensecontext from './Context/Expensecontext.jsx'



createRoot(document.getElementById('root')).render(
  <Themecontext>
    <Expensecontext>
  <BrowserRouter>
  
    <App />
    
    </BrowserRouter>
    </Expensecontext>
   
    </Themecontext>
  
)
