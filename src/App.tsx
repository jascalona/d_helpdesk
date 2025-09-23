import { useState } from 'react'

import { Routes, Route } from 'react-router-dom';

import Inicio from './resources/Inicio';
import ConfigGeneral from './resources/Config_general';

//Para Rutas Absolutas
import Themes from './resources/configG/Theme';
import DesingOrgan from './resources/configG/design_organization';
import ViewOrganization from './resources/component/view_organizacion';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />

        {/*RUTAS ABSOLUTAS*/}


        <Route path="/ConfigGeneral/" element={<ConfigGeneral />}>
          <Route path="Themes" element={<Themes />} />
          <Route path="DesingOrgan" element={<DesingOrgan />} />
          <Route path="ViewOrganization" element={<ViewOrganization />} />
        </Route>

      </Routes>



    </>
  )
}

export default App
