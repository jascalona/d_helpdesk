import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

//Define el tipo de las opciones y las props que recibirá el componente
interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options: Option[]; // El componente ahora espera un array de opciones
}


//El componente ahora recibe 'options' como prop
function Select({ options }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    // Usa la primera opción de las props como valor inicial
    const [selectedValue, setSelectedValue] = useState(options[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option: Option) => {
        setSelectedValue(option);
        setIsOpen(false);
    };

    return (
        <div className="custom-select-container" style={{}}>

            <div className="selected-item" onClick={toggleDropdown} >

                {selectedValue.label}
                <ArrowDropDownIcon />
            </div>
            <ul className={`options-list ${isOpen ? "open" : ""}`}>
                {/* Mapea sobre las opciones que se pasaron como prop */}
                {options.map((option) => (
                    <li key={option.value} onClick={() => handleSelect(option)}>
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Select;