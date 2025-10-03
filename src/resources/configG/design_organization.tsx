import Inputs from '../component/inputs';
import BasicSwitches from '../component/Switch';
import '../../assets/CSS/desing_organiza.css'
import InfoIcon from '@mui/icons-material/Info';
import Select from '../component/select';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import WorkspacesIcon from '@mui/icons-material/Workspaces';


function DesingOrgan() {
    const empresa = [
        { value: "", label: "-- Seleccione una empresa --" },
        { value: "Soluciones Sycom", label: "Soluciones Sycom" },
    ];

    const area = [
        { value: "", label: "-- Seleccione un area --" },
        { value: "Ingenieria", label: "Ingenieria" },
        { value: "Gestion de Servicios", label: "Gestion de Servicios" },

    ];

    return (
        <>
            <h1>Configuracion General</h1>

            <div className="recent-projects">

                <div className="container-cards-setting">


                    <article className='card-setting'>
                        <Link to="/ConfigGeneral/ViewOrganization" style={{ fontSize: '14px' }}>
                        <div className="card-header-setting">

                            <div className="icon-card">
                                <span><AddBusinessIcon sx={{ fontSize: 28 }} /></span>
                            </div>

                            <div className="title">
                                <h3>Nueva Organizacion</h3>
                                <small>Crea una nueva organizacion</small>
                            </div>
                        </div>

                        <div className="descripton-setting">
                            <p>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Repellat, eos?</p>
                        </div>
                        </Link>
                    </article>

                    <article className='card-setting'>

                        <div className="card-header-setting">


                            <div className="icon-card">
                                <span><AdsClickIcon sx={{ fontSize: 28 }} /></span>
                            </div>

                            <div className="title">
                                <h3>Crear Area</h3>
                                <small>Crea una nueva Area</small>
                            </div>
                        </div>

                        <div className="descripton-setting">
                            <p>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Repellat, eos?</p>
                        </div>

                    </article>

                    <article className='card-setting'>
                        <div className="card-header-setting">

                            <div className="icon-card">
                                <span><WorkspacesIcon sx={{ fontSize: 28 }} /></span>
                            </div>

                            <div className="title">
                                <h3>Nueva Sub-area</h3>
                                <small>Crea una nueva sub-area</small>
                            </div>
                        </div>

                        <div className="descripton-setting">
                            <p>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Repellat, eos?</p>
                        </div>
                    </article>


                    <article className='card-setting'>
                        <div className="card-header-setting">
                            <div className="icon-card">
                                <span><AddBusinessIcon sx={{ fontSize: 28 }} /></span>
                            </div>

                            <div className="title">
                                <h3>Nueva Organizacion</h3>
                                <small>Crea una nueva organizacion</small>
                            </div>
                        </div>

                        <div className="descripton-setting">
                            <p>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Repellat, eos?</p>
                        </div>
                    </article>
                </div>

            </div>


        </>
    )
}
export default DesingOrgan