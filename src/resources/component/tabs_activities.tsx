import { useNavigate } from "react-router-dom";


import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ItemAsignaciones from './item_asignaciones';
import ItemActividadesRecientes from './item_recientes';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Actividades recientes" {...a11yProps(0)} />
                    <Tab label="Mis asignaciones" {...a11yProps(1)} />
                    <Tab label="Recordatorios" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <span style={{ fontWeight: 800, fontSize: '12px' }}>EN LA ULTIMA SEMANA</span>

                <ItemActividadesRecientes title='Migracion BD' date='22/09/2025' id='123456' desc='Realizar Migracion de BD V4' autor='Jose Escalona' />
                <ItemActividadesRecientes title='Desarrollo de Scripts' date='22/10/2025' id='654321' desc='Realizar el Desarrollo de Scripts' autor='Ricardo Martines' />
                <ItemActividadesRecientes title='Migracion BD' date='22/09/2025' id='123456' desc='Realizar Migracion de BD V4' autor='Jose Escalona' />

            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
                <span style={{ fontWeight: 800, fontSize: '12px' }}>EN LA ULTIMA SEMANA</span>

                <ItemAsignaciones title='Migracion BD' date='22/09/2025' id='123456' desc='Realizar Migracion de BD V4' status='Por hacer' />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
}

export default BasicTabs