import { useState } from "react";
import { DataTable } from 'primereact/datatable';
import { useEffect } from "react";
import { Column } from 'primereact/column';
import ViewOrganization from './view_organizacion';
import axios from 'axios';

interface Empresa {
    co_emp: string;
    nb_emp: string;
    st_estado: string;
    fe_registro: string;
    auto: string;
}

function Table_I() {
    const [empresas, setEmpresas] = useState<Empresa[]>([]);
    const [cargando, setCargando] = useState(true);

    // Definicion de la configuracion de las cabeceras

    useEffect(() => {
        axios.get<Empresa[]>('http://localhost:8080/basetomee/empresas/listar')
            .then(response => {
                setEmpresas(response.data);
                setCargando(false);
            })
            .catch(error => {
                console.error('Hubo un error al obtener los registros:', error);
                setCargando(false);
            });
    }, []);

    if (cargando) return <p>Cargando registros...</p>;

    return (
        <>
            <div className="table">
            
                <DataTable
                    value={empresas}
                    tableStyle={{ minWidth: '50rem' }}
                    paginator rows={10} // Opcional: añadir paginación
                    emptyMessage="No hay empresas registradas"
                >

                    <Column field="co_emp" header="RIF"></Column>
                    <Column field="nb_emp" header="Nm Organizacion"></Column>
                    <Column field="st_estado" header="Estado"></Column>
                    <Column field="fe_registro" header="Fe Registro"></Column>
                    <Column field="auto" header="Autor"></Column>

                </DataTable>
            </div>
        </>
    )
}

export default Table_I;