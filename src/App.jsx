import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Expenses from './components/Expenses';
import Reports from './components/Reports';
import Categories from './components/Categories';
import Layout from './components/Layout';

const App = () => {
  return (


<Routes>
 <Route element={<Layout />}>
<Route index element={<Dashboard/>}/>
<Route path='/expenses' element={<Expenses/>}/>
<Route path='/reports' element={<Reports/>}/>
<Route path='/categories' element={<Categories/>}/>
 </Route>



</Routes>


    



    
    
  )
}

export default App
