import { useState } from "react";
import { useEffect } from "react";
import EnhancedTable from './table';
import axios from 'axios';
import Table_i from './table';
import '../../assets/CSS/view_organitation.css';

function ViewOrganization() {

    return (
        <>
            
            <div className="section-header">
                <h2>Diseño Organizacional</h2>
            </div>

            <div className="container-table-detalles">
                <Table_i />
            </div>
        </>
    )
}
export default ViewOrganization