import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Inputs from '../inputs'; // Asumo que este componente maneja los inputs
// Importaciones de estilos e iconos
import '../../../assets/CSS/view_organitation.css';
import '../../../assets/CSS/plantilla.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ErrorIcon from '@mui/icons-material/Error';
// Las demás importaciones se mantienen
import AdsClickIcon from '@mui/icons-material/AdsClick';
import WorkspacesIcon from '@mui/icons-material/Workspaces';


const API_URL = 'http://localhost:8080/basetomee/empresas/registrar';

// Definicion de la estructura de los datos del formulario para tipado
interface FormData {
    co_emp: string;
    nb_emp: string;
    st_estado: string;
    autor: string;
}

function CreateEmpresa() {
    // Estado para almacenar los valores del formulario
    const [formData, setFormData] = useState<FormData>({
        co_emp: '',
        nb_emp: '',
        st_estado: '',
        autor: ''
    });

    // Estado para la clave del formulario. 
    const [formKey, setFormKey] = useState(0);

    // Estados para manejar el feedback del usuario
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    // Función genérica para manejar los cambios en cualquier input
    const handleChange = (name: keyof FormData, value: string) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // limpiar los mensajes de éxito/error cuando el usuario empieza a escribir
        if (error) setError(null);
        if (success) setSuccess(false);
    };

    // FUNCIÓN AJUSTADA PARA LLAMAR A LA API (POST)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reiniciar estados de feedback
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        // Validar que todos los campos no estén vacíos antes de enviar
        if (!formData.co_emp || !formData.nb_emp || !formData.st_estado || !formData.autor) {
            setError('Todos los campos son obligatorios.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.post(API_URL, formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            console.log('Empresa creada con éxito:', response.data);

            setSuccess(true);

            // Limpiar el formulario después de un registro exitoso
            setFormData({
                co_emp: '',
                nb_emp: '',
                st_estado: '',
                autor: ''
            });

            // Incremento de la clave para forzar el reinicio de los Inputs
            setFormKey(prevKey => prevKey + 1);

        } catch (err) {
            // Manejo de errores de Axios
            console.error('Error al crear la empresa:', err);

            let errorMessage = 'Error de red o el servidor no responde.';
            if (axios.isAxiosError(err) && err.response) {
                errorMessage = err.response.data.message || `${err.response.data}: Intenta más tarde.`;
            }

            setError(errorMessage);
            setSuccess(false);

        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="create-empresa">
                <div className="formulario">
                    <h2>Crear Empresa</h2>
                    <form onSubmit={handleSubmit} key={formKey}>
                        {/* -------------------- Inputs -------------------- */}
                        <Inputs
                            label="RIF"
                            placeholder="Por ejemplo, J123456789"
                            required={true}
                            errorMessage="El RIF debe tener al menos de 7 a 14 caracteres y no contener símbolos."
                            pattern="^[A-Za-z0-9]{7,14}$"
                            value={formData.co_emp}
                            onChange={(v) => handleChange('co_emp', v)}
                        />

                        <Inputs
                            label="Nombre de Empresa"
                            placeholder="Por ejemplo, Soluciones Sycom C.A"
                            required={true}
                            errorMessage="El nombre debe tener al menos 3 caracteres y no contener símbolos."
                            pattern="^[A-Za-z0-9\s]{3,100}$"
                            value={formData.nb_emp}
                            onChange={(v) => handleChange('nb_emp', v)}
                        />

                        <Inputs
                            label="Estado"
                            placeholder="Por ejemplo, ACTIVO"
                            required={true}
                            errorMessage="El estado debe tener un rango comprendido de 3 a 10 caracteres y no contener símbolos."
                            pattern="^[A-Za-z0-9\s]{3,10}$"
                            value={formData.st_estado}
                            onChange={(v) => handleChange('st_estado', v)}
                        />


                        <Inputs
                            label="Autor"
                            placeholder="Por ejemplo, Jose Escalona"
                            required={true}
                            errorMessage="El nombre debe contener solo letras y espacios."
                            pattern="^[A-Za-z\s]{4,100}$"
                            value={formData.autor}
                            onChange={(v) => handleChange('autor', v)}
                        />
                        {/* ----------------- Feedback al Usuario ----------------- */}
                        {isLoading && <p>Cargando, por favor espera...</p>}
                        {error && <p style={{ color: 'red', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><ErrorIcon sx={{ color: 'red', textAlign: 'center' }} /> {error}</p>}
                        {success && <p style={{ color: 'green', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><CheckBoxIcon sx={{ color: 'green' }} /> Empresa creada exitosamente!</p>}

                        <button
                            type="submit"
                            // Deshabilitar el boton mientras se está cargando
                            disabled={isLoading}
                        >
                            {isLoading ? 'Creando...' : 'Crear'}
                        </button>
                    </form>
                </div>
                {/* ----------------- Options Plantillas ----------------- */}
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
export default CreateEmpresa;