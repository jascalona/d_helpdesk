import * as React from 'react';
import '../../assets/CSS/tabs.css';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import GridViewIcon from '@mui/icons-material/GridView';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';

import ChartRadar from '../component/ChartRadar';

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

function TabsComponent() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Resumen" {...a11yProps(0)} />
                    <Tab label="Productos" {...a11yProps(1)} />
                    <Tab label="Usuarios" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div className="tabs-props-i">
                    <div className="gallery-cards-i">

                        <div className="card-props">
                            <div className="icon">
                                <WorkIcon />
                            </div>
                            <div className="data-text">
                                <h4><strong>Area: 10</strong></h4>
                            </div>
                        </div>

                        <div className="card-props">
                            <div className="icon">
                                <GroupIcon />
                            </div>
                            <div className="data-text">
                                <h4><strong>Usuarios: 30</strong></h4>
                            </div>
                        </div>

                        <div className="card-props">
                            <div className="icon">
                                <GridViewIcon />
                            </div>
                            <div className="data-text">
                                <h4><strong>Productos: 5</strong></h4>
                            </div>
                        </div>


                        <div className="card-props">
                            <div className="icon">
                                <AppsOutageIcon />
                            </div>
                            <div className="data-text">
                                <h4><strong>Componentes: 4</strong></h4>
                            </div>
                        </div>

                    </div>

                    <div className="gallery-cards-ii">
                        
                        <div className="card-charts">
                            <h4>Resumen de Estado</h4>
                            <ChartRadar />
                        </div>

                         <div className="card-charts">
                            <h4>Resumen de Estado</h4>
                            <ChartRadar />
                        </div>
                    
                    </div>

                </div>



            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
}

export default TabsComponent