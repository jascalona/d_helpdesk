import { useState } from "react";
import { Routes, Route, Link, Outlet } from 'react-router-dom';


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
                            <Link to="/" style={{color: '#42526e',fontWeight: 800, }}><li style={{fontSize: 20}} className="">
                                <span className="material-icons"><ReplyAllIcon sx={{ fontSize: 20 }} /></span>
                                Inicio
                            </li></Link>


                            <span className="section-title">General</span>

                            <Link to="Themes"><li className="active">
                                <span className="material-icons"><ContrastIcon sx={{ fontSize: 20 }} /></span>
                                Temas
                            </li></Link>

                            <Link to="DesingOrgan" style={{ color: '#42526e' }}>
                                <li>
                                    <span className="material-icons"><AccountTreeIcon sx={{ fontSize: 20 }} /></span>
                                    Diseño Organizacional
                                </li>
                            </Link>

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
                        <h1>Configuracion General</h1>
                        {/*¡Aqui se renderizaran los componentes de tus sub-rutas!*/}
                        <Outlet />
                    </section>
                </main>
            </div>
        </>
    )
}
export default ConfigGeneral