import { useState } from "react";
import EnhancedTable from './table';

// 1. Define el tipo de dato para tus filas
interface UserData {
    id: number;
    rif: string
    name: string;
    estado: string;
    autor: string
}

// 2. Prepara los datos (este sería el "fetch" de tu API)
const users: UserData[] = [
    { id: 1, rif: "Soluciones Sycom", name: 'John Doe', estado: 'ACTIVO', autor: "Jose Escalona" },
    { id: 2, rif: "MicroFil", name: 'Jane Smith', estado: 'ACTIVO', autor: "Jose Escalona" },
];

// 3. Define la configuración de las cabeceras
const userHeadCells = [
    { id: 'id' as keyof UserData, numeric: true, disablePadding: false, label: 'id' },
    { id: 'rif' as keyof UserData, numeric: false, disablePadding: true, label: 'RIF' },
    { id: 'name' as keyof UserData, numeric: false, disablePadding: true, label: 'Organizacion' },
    { id: 'estado' as keyof UserData, numeric: false, disablePadding: false, label: 'Estado' },
    { id: 'autor' as keyof UserData, numeric: false, disablePadding: true, label: 'autor' },
];


function ViewOrganization() {
    return (
        <>
            <div className="section-header">
                <h2>Estructuras Actuales</h2>
            </div>
            <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam impedit similique voluptatibus recusandae corporis? Quidem aliquid facilis voluptates illum natus sed. Quo velit et nemo repellendus expedita aliquam esse maiores.</small>

            <br /><br /><br />
            <EnhancedTable data={users} headCells={userHeadCells} title="Usuarios" />
        </>
    )

}
export default ViewOrganization