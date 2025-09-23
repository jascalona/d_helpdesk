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
    { id: 1, rif: "J1234567", name: 'John Doe', estado: 'ACTIVO', autor: "Jose Escalona" },
    { id: 2, rif: "J1234568", name: 'Jane Smith', estado: 'ACTIVO', autor: "Jose Escalona" },
    { id: 3, rif: "J1234569", name: 'Peter Jones', estado: 'ACTIVO', autor: "Jose Escalona" },
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

            <EnhancedTable data={users} headCells={userHeadCells} title="Usuarios" />
        </>
    )

}
export default ViewOrganization