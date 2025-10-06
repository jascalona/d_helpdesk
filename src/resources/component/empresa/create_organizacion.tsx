
import '../../../assets/CSS/view_organitation.css';
import { Link } from "react-router-dom";
import Inputs from '../inputs';
import '../../../assets/CSS/plantilla.css'

import AdsClickIcon from '@mui/icons-material/AdsClick';
import WorkspacesIcon from '@mui/icons-material/Workspaces';


function CreateEmpresa() {

    return (
        <>

            <div className="create-empresa">


                <div className="formulario">
                    <h2>Crear Empresa</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        assumenda debitis similique.</p>

                    <small>Lorem ipsum dolor sit amet, consectetur </small>

                    <Inputs label="RIF" placeholder="Por ejmplo, J1234567890" />
                    <Inputs label="Nombre" placeholder="Por ejmplo, Soluciones Sycom C.A" />
                    <Inputs label="Autor" placeholder="Por ejmplo, Jose Escalona" />

                    <div className="btn" style={{ marginTop: 10 }}>
                        <button>Crear</button>
                    </div>

                </div>

                <div className="options-plantillas">

                    <Link to={"Area"} style={{ color: "#42526e" }}>
                        <div className="plantilla">
                            <div className="icon">
                                <span>
                                    <AdsClickIcon sx={{ fontSize: 40 }} />
                                </span>
                            </div>
                            <div className="description-plantilla">
                                <h3>Crear Area</h3>
                                <small style={{ color: '#42526ec6', fontWeight: '300' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, asperiores repellendus suscipit vitae sit quam est provident numquam doloribus similique.</small>
                            </div>
                        </div>
                    </Link>


                    <Link to={"Subarea"} style={{ color: "#42526e" }}>
                        <div className="plantilla">
                            <div className="icon">
                                <span>
                                    <WorkspacesIcon sx={{ fontSize: 40 }} />
                                </span>
                            </div>
                            <div className="description-plantilla">
                                <h3>Crear Sub-area</h3>
                                <small style={{ color: '#42526ec6', fontWeight: '300' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, asperiores repellendus suscipit vitae sit quam est provident numquam doloribus similique.</small>
                            </div>
                        </div>
                    </Link>


                    <div className="section-header" style={{float: 'right', margin: '10px 30px'}}>
                        <Link to={"/ConfigGeneral/EmpresaInt"} style={{ fontSize: '14px' }}>Ver Organizaciones</Link>
                    </div>

                </div>

            </div>


        </>
    )
}
export default CreateEmpresa