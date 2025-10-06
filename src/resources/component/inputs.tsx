import React, { useState } from 'react';
import '../../assets/CSS/componentes.css'; // Asumo que este archivo existe

// Define un tipo para las props del componente, incluyendo un posible error
interface InputProps {
    label: string;
    placeholder: string;
    // Opcionales para la validación:
    errorMessage?: string; // Mensaje de error a mostrar
    pattern?: string;      // Patrón regex para validación
    required?: boolean;    // Indica si el campo es obligatorio
}

function Inputs({ label, placeholder, errorMessage, pattern, required = false }: InputProps) {
    // 1. Estado para el valor del input
    const [value, setValue] = useState('');
    // 2. Estado para saber si el usuario ya ha interactuado con el campo (lo ha desenfocado)
    const [touched, setTouched] = useState(false);
    
    // Función para manejar el cambio en el input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    // Función para manejar el evento onBlur (cuando el input pierde el foco)
    const handleBlur = () => {
        setTouched(true);
    };

    // Lógica de validación
    // Esto es muy básico y podrías externalizarlo, pero sirve para el ejemplo.
    let validationError = errorMessage; // Por defecto, es el error que se pasa por props
    let isValid = true;

    if (required && value.trim() === '') {
        isValid = false;
        validationError = 'Este campo es obligatorio.';
    } else if (pattern && value.trim() !== '' && !new RegExp(pattern).test(value)) {
        isValid = false;
    } else {
        validationError = ''; // Si pasa la validación, borra el mensaje de error
    }

    // El error solo se muestra si NO es válido Y el campo ya fue tocado/desenfocado.
    const showError = !isValid && touched;
    
    return (
        <div className="content-input">
            <label htmlFor={label} className="label">{label}</label>
            <input
                id={label} // Es buena práctica para accesibilidad
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur} // Marcamos como 'tocado' al desenfocar
                required={required}
                // Aplicamos una clase condicional moderna
                className={showError ? 'input-error' : 'input-valid'}
                // Puedes agregar el patrón al input nativo, pero la validación CSS es limitada
                // pattern={pattern} 
            />
            {/* Mensaje de error moderno, solo se muestra si showError es true */}
            {showError && (
                <span className="error-message">
                    {validationError || errorMessage || 'Formato inválido.'}
                </span>
            )}
        </div>
    );
}

export default Inputs;