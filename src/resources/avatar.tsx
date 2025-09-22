import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

interface NameAvatar {
  name: string;
}

function stringAvatar({ name }: NameAvatar) {
  // Maneja nombres con un solo apellido o sin espacio
  const parts = name.split(' ');
  const initials = parts.length > 1 ? `${parts[0][0]}${parts[1][0]}` : parts[0][0];

  return {
    sx: {
      bgcolor: stringToColor(name), // Usa una función para un color dinámico
      width: 30,
      height: 30,
      fontSize: 15,
    },
    children: initials.toUpperCase(),
  };
}

// Interfaz para los props del componente principal
interface BackgroundLetterAvatarsProps {
  name: string;
}

// Ahora el componente acepta el 'name' como prop
function BackgroundLetterAvatars({ name }: BackgroundLetterAvatarsProps) {
  return (
    <Stack direction="row" spacing={2}>
      {/* Pasamos el prop 'name' a la función stringAvatar */}
      <Avatar {...stringAvatar({ name })} />
    </Stack>
  );
}

export default BackgroundLetterAvatars;