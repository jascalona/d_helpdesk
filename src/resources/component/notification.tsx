import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Notification = () => {
  // El estado 'isOpen' controlará si el menú está visible o no
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado (mostrar/ocultar)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-trigger" onClick={toggleDropdown}>
        <NotificationsIcon sx={{fontSize: '20px'}}/>
      </button>

      {/* El menú se renderiza condicionalmente si 'isOpen' es verdadero */}
      {isOpen && (
        <ul className="dropdown-menu show">
          <div className="notification-header">
            <h3>Hola</h3>
          </div>

          <li className='alert-notification'><a href="#">Proyecto creado </a><br />
            <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis optio repellat ea voluptatem neque reprehenderit quam necessitatibus ratione ullam modi.</small>
          </li>
          <li className='alert-notification'><a href="#">Opción 1</a></li>

        </ul>
      )}
    </div>
  );
};

export default Notification;