import { useState } from "react";
import { useEffect } from "react";
import EnhancedTable from '../table';
import axios from 'axios';
import Table_i from '../table';
import '../../../assets/CSS/view_organitation.css';
import { Link } from "react-router-dom";
import Inputs from '../inputs';
import InfoIcon from '@mui/icons-material/Info';
import BasicSwitches from '../Switch';

import VerticalTabs from './TabsVertical';

function ViewOrganization() {

    return (
        <>
            <div className="section-header">
                <h2>Diseño Organizacional</h2>

            </div>
            <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam impedit similique voluptatibus recusandae corporis? Quidem aliquid facilis voluptates illum natus sed. Quo velit et nemo repellendus expedita aliquam esse maiores.</small>


            <VerticalTabs />

            <div className="card-empresa">
                <div className="header-card-empresa">
                    <h3>Crear Organizacion</h3>
                    <InfoIcon sx={{ marginLeft: 1 }} />
                </div>

                <div className="body-empresa">
                    <div className="text-empresa">
                        <Inputs label='Numero de RIF' placeholder='Por ejemplo, J1234567890' />
                        <Inputs label='Nombre de la Organizacion' placeholder='Por ejemplo, Soluciones Sycom' />
                        <BasicSwitches />
                        <div className="btn">
                            <button>Crear</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default ViewOrganization