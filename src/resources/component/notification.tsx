import React, { useState } from 'react';
 import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


const Dropdown = () => {
  // El estado 'isOpen' controlará si el menú está visible o no
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado (mostrar/ocultar)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-trigger" onClick={toggleDropdown}>
        
      </button>
      
      {/* El menú se renderiza condicionalmente si 'isOpen' es verdadero */}
      {isOpen && (
        <ul className="dropdown-menu show">
          <li><a href="#">Opción 1</a></li>
          <li><a href="#">Opción 2</a></li>
          <li><a href="#">Opción 3</a></li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;