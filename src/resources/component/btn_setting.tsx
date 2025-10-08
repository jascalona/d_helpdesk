import React, { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';


import SettingsIcon from '@mui/icons-material/Settings';

import PersonIcon from '@mui/icons-material/Person';
import GridViewIcon from '@mui/icons-material/GridView';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import GroupsIcon from '@mui/icons-material/Groups';


const BtnSetting = () => {
    // El estado 'isOpen' controlará si el menú está visible o no
    const [isOpen, setIsOpen] = useState(false);

    // Función para alternar el estado (mostrar/ocultar)
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-trigger" onClick={toggleDropdown}>
                <SettingsIcon sx={{ fontSize: '20px' }} />
            </button>

            {/* El menú se renderiza condicionalmente si 'isOpen' es verdadero */}
            {isOpen && (
                <ul className="dropdown-menu show">
                    <div className="notification-header">
                        <h4>Herramientas</h4>
                    </div>

                    <div className="option-setting"><PersonIcon />
                        <li className='alert-setting'><Link to="/ConfigGeneral/Themes" style={{color: '#061112'}}>Configuracion General</Link><br />
                            <small>Ajusta tus preferencias personales</small>
                        </li>
                    </div>


                    <div className="option-setting"><AppsOutageIcon />
                        <li className='alert-setting' style={{color: '#061112'}}>Componentes <br />
                            <small>Gestiona y configura componentes para tus productos o proyectos.</small>
                        </li>
                    </div>

                    <div className="option-setting"><GridViewIcon />
                        <li className='alert-setting'><Link to="Nuveo rpoducto" style={{color: '#061112'}}> Nuevo Producto </Link><br />
                            <small>Integra y configura tu portafolio productos.</small>
                        </li>
                    </div>

                    <div className="option-setting"><GroupsIcon />
                        <li className='alert-setting'><Link to="Nuveo rpoducto" style={{color: '#061112'}}>Gestion de Usuarios </Link><br />
                            <small>Gestiona usuarios, grupos y solicitudes de acceso.</small>
                        </li>
                    </div>
                    <br />

                </ul>
            )}
        </div>
    );
};

export default BtnSetting;