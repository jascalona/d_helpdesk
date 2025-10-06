
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

                    <form>
                        <Inputs
                            label="RIF"
                            placeholder="Por ejemplo, J123456789"
                            required={true} // Obligatorio
                            errorMessage="El rif debe tener al menos 7 caracteres y no contener símbolos."
                            pattern="^[A-Za-z0-9]{7}$"
                        />
                        <Inputs
                            label="Nombre de Empresa"
                            placeholder="Por ejemplo, Soluciones Sycom C.A"
                            required={true} // Obligatorio
                            errorMessage="El nombre debe tener al menos 3 caracteres y no contener símbolos."
                            pattern="^[A-Za-z0-9]{3,}$"
                        />

                        <Inputs
                            label="Autor"
                            placeholder="Por ejemplo, Jose Escalona"
                            required={true} // Obligatorio
                            errorMessage="El nombre debe tener al menos 3 caracteres y no contener símbolos."
                            pattern="^[A-Za-z]{4}$"
                        />


                        <button type="submit">Crear</button>
                    </form>

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


                    <div className="section-header" style={{ float: 'right', margin: '10px 30px' }}>
                        <Link to={"/ConfigGeneral/EmpresaInt"} style={{ fontSize: '14px' }}>Ver Organizaciones</Link>
                    </div>

                </div>

            </div>


        </>
    )
}
export default CreateEmpresa