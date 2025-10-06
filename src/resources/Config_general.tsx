import React, { useState } from "react";
// Importamos NavLink en lugar de Link
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';


import Logo from '@mui/icons-material/WifiTethering';
import ContrastIcon from '@mui/icons-material/Contrast';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupsIcon from '@mui/icons-material/Groups';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';


import BackgroundLetterAvatars from './avatar';
import Notification from './component/notification';
import BtnSetting from './component/btn_setting';
//Component Links
import Themes from './configG/Theme';


function ConfigGeneral() {

    // Función para manejar las clases condicionales
    const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
        // La clase base 'nav-link-item' se aplica siempre
        // La clase 'active-link' se aplica solo si isActive es true
        return `nav-link-item ${isActive ? 'active-link' : ''}`;
    };

    return (
        <>
            <div className="container">
                {/* Sidebar */}
                <aside className="sidebar">
                    <div className="logo">
                        <Logo sx={{ fontSize: 24, marginRight: '5px' }} />
                        <p>Helpdesk</p>
                    </div>
                    <nav className="nav-menu">
                        <ul>
                            <span className="section-title">General</span>

                            {/* NavLink para 'Inicio' */}
                            <NavLink
                                to="/"
                                className={getNavLinkClass}
                                // 'end' asegura que solo se active si la ruta es EXACTAMENTE "/"
                                end
                            >
                                <li style={{ fontSize: 15 }}>
                                    <span className="material-icons"><ReplyAllIcon sx={{ fontSize: 20 }} /></span>
                                    Inicio
                                </li>
                            </NavLink>



                            {/* NavLink para 'Temas' */}
                            <NavLink
                                to="Themes"
                                className={getNavLinkClass}
                            >
                                <li>
                                    <span className="material-icons"><ContrastIcon sx={{ fontSize: 20 }} /></span>
                                    Temas
                                </li>
                            </NavLink>

                            {/* NavLink para 'Diseño Organizacional' */}
                            <NavLink
                                to="DesingOrgan"
                                className={getNavLinkClass}
                            >
                                <li>
                                    <span className="material-icons"><AccountTreeIcon sx={{ fontSize: 20 }} /></span>
                                    Diseño Organizacional
                                </li>
                            </NavLink>

                            <br />
                            <span className="section-title">OTROS</span>
                            <li>
                                <span className="material-icons"><GroupsIcon /></span>
                                <div className="team-item">
                                    Otros...
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className="feedback-link">
                        <a href="#">Enviar comentarios</a>
                    </div>
                </aside>

                {/* Contenido principal */}
                <main className="main-content">
                    {/* Barra superior */}
                    <header className="topbar">

                        <div className="btn">
                        </div>

                        <div className="topbar-actions">
                            <span className="dropdown-btn-icon">
                                <Notification />
                            </span>
                            <span className="dropdown-btn-icon">
                                <BtnSetting />
                            </span>

                            <span className="material-icons"><BackgroundLetterAvatars name='Jose Escalona' /></span>
                        </div>
                    </header>

                    {/* Cuerpo de la página */}
                    <section className="page-body">
                        {/* ¡Aquí se renderizaran los componentes de tus sub-rutas! */}
                        <Outlet />
                    </section>
                </main>
            </div>
        </>
    )
}
export default ConfigGeneral;