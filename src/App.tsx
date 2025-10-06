import { useState } from 'react'

import { Routes, Route } from 'react-router-dom';

import Inicio from './resources/Inicio';
import ConfigGeneral from './resources/Config_general';

//Para Rutas Absolutas
import Themes from './resources/configG/Theme';
import DesingOrgan from './resources/configG/design_organization';
import CreateEmpresa from './resources/component/empresa/create_organizacion';
import DetallesOrganization from './resources/configG/detalles_organization';
import EmpresaInt from './resources/component/empresa/empresaInt';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />

        {/*RUTAS ABSOLUTAS*/}


        <Route path="/ConfigGeneral/" element={<ConfigGeneral />}>
          <Route path="Themes" element={<Themes />} />

          <Route path="DesingOrgan/" element={<DesingOrgan />} />

          <Route path="CreateEmpresa" element={<CreateEmpresa />} />
          <Route path='DetallesOrganization' element={<DetallesOrganization />} />

          <Route path='EmpresaInt' element={<EmpresaInt />}/>

      </Route>

    </Routes >



    </>
  )
}

export default App
