import React, { useState } from 'react';
import '../../assets/CSS/componentes.css'; // Asumo que este archivo existe

// Define un tipo para las props del componente
interface InputProps {
    label: string;
    placeholder: string;
    // 💥 NUEVO: Valor del campo, controlado por el padre
    value: string;
    // 💥 NUEVO: Función para notificar al padre sobre el cambio de valor
    onChange: (value: string) => void; 
    
    // Opcionales para la validación:
    errorMessage?: string; // Mensaje de error a mostrar
    pattern?: string;      // Patrón regex para validación
    required?: boolean;    // Indica si el campo es obligatorio
}

function Inputs({ 
    label, 
    placeholder, 
    value,       // Recibido como prop
    onChange,    // Recibido como prop
    errorMessage, 
    pattern, 
    required = false 
}: InputProps) {
    
    // 1. Estado para saber si el usuario ya ha interactuado (lo ha desenfocado)
    const [touched, setTouched] = useState(false);
    
    // Función para manejar el cambio en el input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Llama a la función del componente padre para actualizar el estado
        onChange(e.target.value); 
    };

    // Función para manejar el evento onBlur (cuando el input pierde el foco)
    const handleBlur = () => {
        setTouched(true);
    };

    // Lógica de Validación (Ajustada para usar la prop 'value')
    let isValid = true;
    let validationError = errorMessage || 'El formato es inválido.'; // Mensaje de error por defecto

    if (required && value.trim() === '') {
        isValid = false;
        validationError = 'Este campo es obligatorio.';
    } else if (pattern && value.trim() !== '' && !new RegExp(pattern).test(value)) {
        isValid = false;
        // Si falla el patrón, mantiene el 'errorMessage' de las props o el mensaje por defecto.
    } else {
        // Si pasa la validación, el campo es válido.
    }

    // El error solo se muestra si NO es válido Y el campo ya fue tocado/desenfocado.
    const showError = !isValid && touched;
    
    return (
        <div className="content-input">
            <label htmlFor={label} className="label">{label}</label>
            <input
                id={label} 
                type="text"
                placeholder={placeholder}
                
                value={value} 
                
                onChange={handleChange} 
                
                onBlur={handleBlur} 
                required={required}
                className={showError ? 'input-error' : 'input-valid'}
            />
            
            {/* Mensaje de error moderno */}
            {showError && (
                <span className="error-message">
                    {validationError}
                </span>
            )}
        </div>
    );
}

export default Inputs;