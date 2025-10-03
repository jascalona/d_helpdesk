import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; // Para el fondo redondeado
import Container from '@mui/material/Container'; // Para centrar el contenido (opcional)
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Para el botón de flecha
import { styled } from '@mui/material/styles';
import {
    TextField,
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    Button,
} from '@mui/material'; // Para los campos del formulario

// --- Componentes Reutilizables ---

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    title: string; // Para el título de la sección de datos
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, title, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{ flexGrow: 1 }} // Asegura que el panel use el espacio restante
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 4 }}>
                    {/* Título de la sección de datos */}
                    <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    {/* Contenido del formulario */}
                    <Paper
                        elevation={2} // Sombra suave como en la imagen
                        sx={{
                            p: 4,
                            borderRadius: 2, // Bordes redondeados
                            maxWidth: 500, // Ajuste de ancho para el formulario
                        }}
                    >
                        <Box>{children}</Box>
                        {/* Botón de flecha para siguiente paso */}
                        {index < 3 && ( // Muestra el botón excepto en el paso "Finalizar"
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        // Lógica para avanzar de pestaña
                                        // Esto simula el avance, la lógica de validación iría aquí.
                                        // En este ejemplo, simplemente avanza al siguiente paso.
                                        if (index < 3) props.onNext();
                                    }}
                                    sx={{
                                        borderRadius: '50%', // Botón circular
                                        width: 56,
                                        height: 56,
                                        minWidth: 0,
                                        backgroundColor: '#5A639C', // Color primario
                                        '&:hover': {
                                            backgroundColor: '#5A639C',
                                        },
                                    }}
                                >
                                    <ArrowForwardIcon />
                                </Button>
                            </Box>
                        )}
                    </Paper>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

// --- Estilo Personalizado para el Indicador de Paso (Círculo y Línea) ---

const StyledTab = styled(Tab)(({ theme, ownerState }) => ({
    // Ocultar el indicador estándar del tab
    '&.Mui-selected': {
        color: '#5A639C', // Color del texto activo
        backgroundColor: 'transparent',
    },
    '&.MuiTab-root': {
        minHeight: 80, // Espacio entre elementos
        padding: '6px 0',
        alignItems: 'flex-start', // Alinear texto al inicio
        textTransform: 'none', 
        fontSize: '1rem',
    },
    // Estilo del círculo del paso (simulado con el icono)
    '& .MuiTab-iconWrapper': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: '50%',
        marginRight: theme.spacing(2),
        fontSize: '1rem',
        fontWeight: 'bold',
        color: ownerState.active ? 'white' : 'white', // Número en blanco
        backgroundColor: ownerState.active ? '#7776B3' : '#B0B0B0', //activo, gris para inactivo
        border: ownerState.active ? '2px solid #5A639C' : '2px solid #B0B0B0', // Borde
    },
    // Ocultar el texto del icono (que es el número del paso)
    '& .MuiTab-iconWrapper > svg': {
        display: 'none',
    },
    // Estilo para el número de paso dentro del círculo
    '& .MuiTab-iconWrapper::after': {
        content: `"${ownerState.stepNumber}"`, // Mostrar el número
    },
}));

// --- Estilo de la Línea Vertical de Conexión ---

const StyledTabs = styled(Tabs)(({ theme }) => ({
    // Línea vertical que simula la conexión del stepper
    '& .MuiTabs-indicator': {
        backgroundColor: 'transparent',},
    borderRight: 'none',
    paddingLeft: theme.spacing(4), // Espacio a la izquierda
}));


// --- Componente Principal ---

export function VerticalStepperTabs() {
    const [value, setValue] = React.useState(0);

    const steps = [
        { label: 'Datos de la empresa', title: 'Datos de la empresa' },
        { label: 'Verificacion de empresa', title: 'Verificacion de empresa' },
    ];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleNext = () => {
        setValue((prev) => prev + 1);
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
            {/* Contenedor principal para el diseño de la imagen */}
            <Paper elevation={0} sx={{ p: 4, borderRadius: 3, display: 'flex' }}>

                {/* Columna izquierda: Indicadores de Paso (Tabs) */}
                <Box sx={{ width: 250, borderRight: '1px solid #E0E0E0' }}>
                    <Typography variant="h5" sx={{ mb: 4, fontWeight: 'medium' }}>
                        Crear Empresa{' '}
                        <Box component="span" sx={{ color: '#909090', fontWeight: 'regular', fontSize: '1rem' }}>
                            {value + 1}/2
                        </Box>
                    </Typography>

                    <StyledTabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Proceso de solicitud de cobro"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        {steps.map((step, index) => (
                            <StyledTab
                                key={index}
                                label={
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <Typography
                                            sx={{
                                                fontSize: '0.9rem',
                                                fontWeight: index === value ? 'bold' : 'normal',
                                                color: index === value ? '#1976D2' : '#000',
                                            }}
                                        >
                                            {step.label}
                                        </Typography>
                                    </Box>
                                }
                                icon={
                                    <Box
                                        sx={{
                                            width: 24,
                                            height: 24,
                                            borderRadius: '50%',
                                            backgroundColor: index === value ? '#1976D2' : '#B0B0B0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '0.9rem',
                                            fontWeight: 'bold',
                                            mr: 2,
                                        }}
                                    >
                                        {/* Icono si está activo, número si no lo está - aquí solo usamos el color/texto */}
                                    </Box>
                                }
                                iconPosition="start"
                                // Pasar props personalizadas para el estilo
                                ownerState={{ active: index === value, stepNumber: index + 1 }}
                                {...a11yProps(index)}
                            />
                        ))}
                    </StyledTabs>
                </Box>

                {/* Columna central y derecha: Contenido del Formulario y Detalle */}
                <Box sx={{ display: 'flex', flexGrow: 1 }}>

                    {/* Columna central: Formulario de datos */}
                    <Box sx={{ flex: 1 }}>
                        <TabPanel value={value} index={0} title={steps[0].title} onNext={handleNext}>
                            {/* Contenido del Paso 1: Datos del cobrador */}

                            <TextField
                                fullWidth
                                margin="normal"
                                label="RIF"
                                type="text"
                                variant="outlined"
                            />

                            <TextField
                                fullWidth
                                margin="normal"
                                label="Nombre"
                                type="text"
                                variant="outlined"
                            />

                            <TextField
                                fullWidth
                                margin="normal"
                                label="Estado"
                                type="text"
                                defaultValue={"Activo"}
                                variant="outlined"
                            />

                            <TextField
                                fullWidth
                                margin="normal"
                                label="Autor"
                                type="text"
                                variant="outlined"
                            />


                        </TabPanel>




                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}

export default VerticalStepperTabs;