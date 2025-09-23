import { useState } from 'react';
import Logo from '@mui/icons-material/WifiTethering';
import PersonIcon from '@mui/icons-material/Person';
import WidgetsIcon from '@mui/icons-material/Widgets';
import GroupsIcon from '@mui/icons-material/Groups';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import HelpIcon from '@mui/icons-material/Help';


import BackgroundLetterAvatars from '../avatar';
import Notification from '../component/notification'
import BtnSetting from '../component/btn_setting'
import Modal from '../component/modal'
import BasicTabs from '../component/tabs_activities'

import AddIcon from '@mui/icons-material/Add';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';

//Productos
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import DevicesIcon from '@mui/icons-material/Devices';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';



function MaquetadoSetting() {
    return (
        <div className="container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">
                    <Logo sx={{ fontSize: 24, marginRight: '5px' }} />
                    <p>Helpdesk</p>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li className="active">
                            <span className="material-icons"><PersonIcon sx={{ fontSize: 20 }} /></span>
                            Para ti
                        </li>
                        <li>
                            <span className="material-icons"><WidgetsIcon sx={{ fontSize: 20 }} /></span>
                            Productos
                        </li>

                        <li>
                            <span className="material-icons"><MultilineChartIcon sx={{ fontSize: 20 }} /></span>
                            Indicadores
                        </li>

                        <li>
                            <span className="material-icons"><DonutLargeIcon sx={{ fontSize: 20 }} /></span>
                            Reportes
                        </li>

                        <br />
                        <span className="section-title">Equipos</span>
                        <li>
                            <span className="material-icons"><GroupsIcon /></span>
                            <div className="team-item">
                                Mi equipo
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
                    <h1>Para ti</h1>
                    <div className="recent-projects">
                        <div className="section-header">
                            <h2>Productos recientes</h2>
                            <a href="#" style={{ fontSize: '14px' }}>Ver todos los Productos</a>
                        </div>

                        <div className="project-cards-container">
                            {/* Tarjeta 1 */}
                            <div className="project-card">
                                <div className="card-header">
                                    <span className="project-icon"><SpeakerPhoneIcon /></span>
                                    <h3>Sypago</h3>
                                </div>
                                <p className="project-type">Software gestionado por el equipo</p>
                                <div className="project-stats">
                                    <div className="stat-item">
                                        <h4>Pendientes</h4>
                                        <span>2</span>
                                    </div>
                                    <div className="stat-item">
                                        <h4>Incidencias</h4>
                                        <span>1</span>
                                    </div>
                                </div>
                            </div>
                            {/* Tarjeta 2 */}
                            <div className="project-card">
                                <div className="card-header">
                                    <span className="project-icon"><DevicesIcon /></span>
                                    <h3>SIMF</h3>
                                </div>
                                <p className="project-type">Software gestionado por la empresa</p>
                                <div className="project-stats">
                                    <div className="stat-item">
                                        <h4>Pendientes</h4>
                                        <span>0</span>
                                    </div>
                                    <div className="stat-item">
                                        <h4>Incidencias</h4>
                                        <span>0</span>
                                    </div>
                                </div>
                            </div>
                            {/* Tarjeta 3 */}
                            <div className="project-card">
                                <div className="card-header">
                                    <span className="project-icon"><CurrencyExchangeIcon /></span>
                                    <h3>SGLPAR</h3>
                                </div>
                                <p className="project-type">Software gestionado por la empresa</p>
                                <div className="project-stats">
                                    <div className="stat-item">
                                        <h4>Pendientes</h4>
                                        <span>0</span>
                                    </div>
                                    <div className="stat-item">
                                        <h4>Incidencias</h4>
                                        <span>0</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <BasicTabs />


                </section>
            </main>
        </div>
    )
}

export default MaquetadoSetting