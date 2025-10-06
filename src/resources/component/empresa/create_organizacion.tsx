import { useState } from 'react';
import '../../../assets/CSS/view_organitation.css';
import { Link } from "react-router-dom";
import Inputs from '../inputs';
import '../../../assets/CSS/plantilla.css'

import AdsClickIcon from '@mui/icons-material/AdsClick';
import WorkspacesIcon from '@mui/icons-material/Workspaces';


function CreateEmpresa() {

    // 1. Estado para almacenar los valores del formulario
    const [formData, setFormData] = useState({
        rif: '',
        nombreEmpresa: '',
        autor: ''
    });

    // Función genérica para manejar los cambios en cualquier input
    const handleChange = (name: string, value: string) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value // name puede ser 'rif', 'nombreEmpresa', o 'autor'
        }));
    };

    // 3. Función para manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Detiene el envío por defecto de HTML

        // ¡Ahora puedes acceder a todos los datos!
        console.log('Datos a enviar:', formData);

        // Aquí iría tu lógica para enviar los datos (fetch, axios, etc.)
    };

    return (
        <>

            <div className="create-empresa">


                <div className="formulario">
                    <h2>Crear Empresa</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        assumenda debitis similique.</p>

                    <small>Lorem ipsum dolor sit amet, consectetur </small>

                    <form onSubmit={handleSubmit}>
                        <Inputs
                            label="RIF"
                            placeholder="Por ejemplo, J123456789"
                            required={true}
                            errorMessage="El RIF debe tener al menos de 7 a 14 caracteres y no contener símbolos."
                            pattern="^[A-Za-z0-9]{7,14}$"
                            value={formData.rif}
                            onChange={(v) => handleChange('rif', v)}
                        />

                        <Inputs
                            label="Nombre de Empresa"
                            placeholder="Por ejemplo, Soluciones Sycom C.A"
                            required={true}
                            errorMessage="El nombre debe tener al menos 3 caracteres y no contener símbolos."
                            pattern="^[A-Za-z0-9\s]{3,100}$" // Ajusté el pattern, el anterior solo permitía 3 caracteres
                            value={formData.nombreEmpresa}
                            onChange={(v) => handleChange('nombreEmpresa', v)}
                        />

                        <Inputs
                            label="Autor"
                            placeholder="Por ejemplo, Jose Escalona"
                            required={true}
                            errorMessage="El nombre debe contener solo letras y espacios."
                            pattern="^[A-Za-z\s]{4,100}$" // Ajusté el pattern para nombres
                            value={formData.autor}
                            onChange={(v) => handleChange('autor', v)}
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