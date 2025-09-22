import { useState } from 'react'

import { Routes, Route } from 'react-router-dom';
  
import Inicio from './resources/Inicio';
import ConfigGeneral from './resources/Config_general';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path="ConfigGeneral" element={<ConfigGeneral />} />
      </Routes>
    </>
  )
}

export default App
