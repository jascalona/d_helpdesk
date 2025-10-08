import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled, useTheme } from '@mui/material/styles'; // Importar useTheme
import useMediaQuery from '@mui/material/useMediaQuery'; // Importar useMediaQuery
import {
    TextField,
    Button,
} from '@mui/material'; // Importar componentes necesarios

// Asume que este componente existe. Lo incluimos para que compile.
const InputDesable = () => <TextField fullWidth margin="normal" label="Campo Deshabilitado" disabled />;

// --- Componentes Reutilizables ---

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    title: string;
    onNext: () => void; // Asegurar que onNext esté en las props para el botón
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, title, onNext, ...other } = props;

    // Estilo adaptado para el botón de siguiente
    const handleNextClick = () => {
        if (index < 3) onNext();
    };

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            // Importante: flexGrow: 1 en el div principal del TabPanel
            style={{ flexGrow: 1 }}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: { xs: 2, sm: 4 } }}> {/* Padding responsivo */}
                    {/* Título de la sección de datos */}
                    <Typography variant="h5" sx={{ mb: 4, fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                    {/* Contenido del formulario */}
                    <Paper
                        elevation={2}
                        sx={{
                            p: { xs: 2, sm: 4 }, // Padding responsivo para el Paper
                            borderRadius: 2,
                            // Eliminar el maxWidth fijo para que ocupe todo el espacio disponible
                            // maxWidth: 500, // <--- ELIMINADO PARA RESPONSIVIDAD COMPLETA
                        }}
                    >
                        <Box>{children}</Box>
                        {/* Botón de flecha para siguiente paso */}
                        {index < 3 && (
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                                <Button
                                    variant="contained"
                                    onClick={handleNextClick}
                                    sx={{
                                        borderRadius: '50%',
                                        width: 56,
                                        height: 56,
                                        minWidth: 0,
                                        backgroundColor: '#5A639C',
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

function a11yProps(index: number, isVertical: boolean) {
    const orientation = isVertical ? 'vertical' : 'horizontal';
    return {
        id: `${orientation}-tab-${index}`,
        'aria-controls': `${orientation}-tabpanel-${index}`,
    };
}

// --- Estilo Personalizado para el Indicador de Paso (Círculo y Línea) ---

const StyledTab = styled(Tab)(({ theme, ownerState }) => ({
    '&.Mui-selected': {
        color: '#5A639C',
        backgroundColor: 'transparent',
    },
    '&.MuiTab-root': {
        minHeight: 80,
        padding: '6px 0',
        alignItems: 'flex-start',
        textTransform: 'none',
        fontSize: '1rem',
        // Estilo adaptado para la orientación horizontal en pantallas pequeñas
        ...(ownerState.isMobile && {
            minHeight: 48, // Menos altura en móvil
            padding: '6px 12px',
            alignItems: 'center',
            flexDirection: 'row', // Icono y texto en línea en horizontal
            justifyContent: 'center',
        }),
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
        color: 'white',
        backgroundColor: ownerState.active ? '#7776B3' : '#B0B0B0',
        border: ownerState.active ? '2px solid #5A639C' : '2px solid #B0B0B0',

        // Ajuste de margen para horizontal
        ...(ownerState.isMobile && {
            marginRight: theme.spacing(1),
        }),
    },
    '& .MuiTab-iconWrapper > svg': {
        display: 'none',
    },
    '& .MuiTab-iconWrapper::after': {
        content: `"${ownerState.stepNumber}"`,
    },
}));

// --- Estilo de la Línea Vertical/Horizontal de Conexión ---

const StyledTabs = styled(Tabs)(({ theme, ownerState }) => ({
    '& .MuiTabs-indicator': {
        // En vertical, la línea se simula con el borde de la columna (en el Box padre)
        backgroundColor: 'transparent',
        // En horizontal, queremos la línea estándar de MUI (o personalizarla)
        ...(ownerState.isMobile && {
            backgroundColor: '#5A639C', // Indicador horizontal visible
        }),
    },
    borderRight: 'none',
    paddingLeft: theme.spacing(4),

    // Estilo responsivo
    ...(ownerState.isMobile && {
        borderRight: 'none',
        borderBottom: `1px solid ${theme.palette.divider}`, // Separador inferior en móvil
        paddingLeft: theme.spacing(0), // Sin padding extra en móvil
        '& .MuiTabs-flexContainer': {
            justifyContent: 'space-around', // Distribuir los tabs en horizontal
        }
    }),
}));


// --- Componente Principal ---

export function VerticalStepperTabs() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    // Determinar si la pantalla es menor que el breakpoint 'sm'
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const steps = [
        { label: 'Datos de la Empresa', title: 'Datos de la Empresa' },
        { label: 'Verificación', title: 'Verificación de Empresa' },
    ];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleNext = () => {
        // En un caso real, aquí iría la validación del formulario antes de avanzar.
        setValue((prev) => Math.min(prev + 1, steps.length - 1));
    };

    // Determina la orientación de los tabs
    const orientation = isMobile ? 'horizontal' : 'vertical';

    return (
        <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
            {/* El Paper principal no cambia mucho, pero el `display: 'flex'` debe ser condicional */}
            <Paper
                elevation={0}
                sx={{
                    p: { xs: 2, sm: 4 }, // Padding responsivo
                    borderRadius: 3,
                    // Flexbox solo en pantallas grandes (vertical)
                    display: { xs: 'block', sm: 'flex' },
                }}
            >
                {/* =================================
                COLUMNA DE INDICADORES DE PASO (TABS)
                =================================
                */}
                <Box
                    sx={{
                        width: { xs: '100%', sm: 250 },
                        borderRight: { xs: 'none', sm: '1px solid #E0E0E0' },
                        mb: { xs: 2, sm: 0 }, 
                        mr: { xs: 0, sm: 4 }, 
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            mb: { xs: 2, sm: 4 },
                            fontWeight: 'medium',
                            textAlign: { xs: 'center' } 
                        }}
                    >
                        Crear Empresa{' '}
                        <Box component="span" sx={{ color: '#909090', fontWeight: 'regular', fontSize: '1rem' }}>
                            {value + 1}/{steps.length}
                        </Box>
                    </Typography>

                    <StyledTabs
                        orientation={orientation}
                        variant={isMobile ? 'fullWidth' : 'scrollable'} // fullWidth en móvil
                        value={value}
                        onChange={handleChange}
                        aria-label="Proceso de solicitud de cobro"
                        TabIndicatorProps={{
                            // En vertical, el indicador es transparente. En horizontal, se usa el por defecto.
                            style: { backgroundColor: isMobile ? '#5A639C' : '#5A639C' },
                        }}
                        ownerState={{ isMobile }} // Pasar la prop para estilizar en móvil
                    >
                        {steps.map((step, index) => (
                            <StyledTab
                                key={index}
                                label={
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <Typography
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: index === value ? 'bold' : 'normal',
                                                color: index === value ? '#5A639C' : '#000',
                                            }}
                                        >
                                            {step.label}
                                        </Typography>
                                    </Box>
                                }
                                icon={
                                    <Box
                                    // Estilo de icono movido al StyledTab para consistencia
                                    />
                                }
                                iconPosition="start"
                                ownerState={{
                                    active: index === value,
                                    stepNumber: index + 1,
                                    isMobile // Pasar la prop para el estilo responsivo
                                }}
                                {...a11yProps(index, !isMobile)} // Usar el helper a11yProps adaptado
                            />
                        ))}
                    </StyledTabs>
                </Box>

                {/* =================================
                CONTENIDO DEL FORMULARIO
                =================================
                */}
                <Box sx={{ flex: 1 }}>
                    <TabPanel value={value} index={0} title={steps[0].title} onNext={handleNext}>
                        {/* Contenido del Paso 1: Datos de la empresa */}
                        {/* Los TextFields ya son fullWidth, lo que ayuda a la responsividad */}
                        <TextField fullWidth margin="normal" label="RIF" type="text" variant="outlined" />
                        <TextField fullWidth margin="normal" label="Nombre" type="text" variant="outlined" />
                        <TextField fullWidth margin="normal" label="Estado" type="text" defaultValue={"Activo"} variant="outlined" />
                        <TextField fullWidth margin="normal" label="Autor" type="text" variant="outlined" />
                    </TabPanel>

                    <TabPanel value={value} index={1} title={steps[1].title} onNext={handleNext}>
                        {/* Contenido del Paso 2: Verificación */}
                        <Box className="container-verification">
                            {/* Ajusta la clase .content si no tienes estilos externos que lo hagan responsivo */}
                            <Box className="content">
                                <InputDesable />
                                <InputDesable />
                                <InputDesable />
                                <InputDesable />
                            </Box>
                        </Box>
                    </TabPanel>
                </Box>
            </Paper>
        </Container>
    );
}

export default VerticalStepperTabs;