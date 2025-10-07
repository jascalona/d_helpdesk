import { useState } from 'react'

import { Routes, Route } from 'react-router-dom';

import Inicio from './resources/Inicio';
import ConfigGeneral from './resources/Config_general';

//Para Rutas Absolutas
import Themes from './resources/configG/Theme';
import DesingOrgan from './resources/configG/design_organization';

//Empresa
import CreateEmpresa from './resources/component/empresa/create_empresa';
import EmpresaInt from './resources/component/empresa/empresaInt';

//Area
import CreateArea from './resources/component/area/create_area';
import AreaInt from './resources/component/area/table';

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
          <Route path='EmpresaInt' element={<EmpresaInt />}/>


        <Route path='CreateArea' element={<CreateArea />}/>
        <Route path='AreaInt' element={<AreaInt />}/>


      </Route>

    </Routes >



    </>
  )
}

export default App
