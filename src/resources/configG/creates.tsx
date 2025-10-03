import Inputs from '../component/inputs';
import BasicSwitches from '../component/Switch';
import '../../assets/CSS/desing_organiza.css'
import InfoIcon from '@mui/icons-material/Info';
import Select from '../component/select';
import { Routes, Route, Link, Outlet } from 'react-router-dom';


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

                <div className="container-empresa">


                    <div className="section-header">
                        <h2>Diseño Organizacional</h2>
                        <Link to="/ConfigGeneral/ViewOrganization" style={{ fontSize: '14px' }}>Ver Estructuras</Link>

                    </div>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam impedit similique voluptatibus recusandae corporis? Quidem aliquid facilis voluptates illum natus sed. Quo velit et nemo repellendus expedita aliquam esse maiores.</small>


                    <div className="card-empresa">
                        <div className="header-card-empresa">
                            <h3>Crear Organizacion</h3>
                            <InfoIcon sx={{ marginLeft: 1 }} />
                        </div>

                        <div className="body-empresa">
                            <div className="text-empresa">
                                <Inputs label='Numero de RIF' placeholder='Por ejemplo, J1234567890' />
                                <Inputs label='Nombre de la Organizacion' placeholder='Por ejemplo, Soluciones Sycom' />
                                <BasicSwitches />
                                <div className="btn">
                                    <button>Crear</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-area">
                        <div className="card-empresa">
                            <div className="header-card-empresa">
                                <h3>Crear Area</h3>
                                <InfoIcon sx={{ marginLeft: 1 }} />
                            </div>

                            <div className="body-empresa">
                                <div className="text-empresa">
                                    <label htmlFor="" style={{ fontSize: '12px', margin: '5px', lineHeight: 2.5 }}>Empresa</label>
                                    <Select options={empresa} />

                                    <div className="gallery-inputs">
                                        <Inputs label='Nombre del area' placeholder='Por ejemplo, Gestion de Servicios' />
                                        <Inputs label='Nombre de subarea' placeholder='Por ejemplo, QA' />
                                    </div>

                                    <BasicSwitches />
                                    <div className="btn">
                                        <button>Crear</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card-empresa">
                            <div className="header-card-empresa">
                                <h3>Sub Area</h3>
                                <InfoIcon sx={{ marginLeft: 1 }} />
                            </div>

                            <div className="body-empresa">
                                <div className="text-empresa">
                                    <label htmlFor="" style={{ fontSize: '12px', margin: '5px', lineHeight: 2.5 }}>Empresa</label>

                                    <div className="gallery-inputs" style={{paddingBottom: 3}}>
                                        <Select options={empresa} />
                                        <Select options={area} />
                                    </div>
                                    <Inputs label='Nombre de subarea' placeholder='Por ejemplo, QA' />
                                    

                                    <BasicSwitches />
                                    <div className="btn">
                                        <button>Crear</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </div>


        </>
    )
}
export default DesingOrgan