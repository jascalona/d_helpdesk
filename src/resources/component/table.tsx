import { useState, useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import Avatar from '../avatar'; 

interface Empresa {
    co_emp: string;
    nb_emp: string;
    st_estado: string;
    fe_registro: string;
    autor: string; 
}

// Función para renderizar el Avatar y el nombre en la celda
const autorBodyTemplate = (rowData: Empresa) => {
    // Usamos 'rowData.autor' para obtener el nombre de la fila actual
    const autorNombre = rowData.autor; 

    return (
        // Utilizamos un contenedor flexible 
        <div className="flex align-items-center gap-2"> 
            <Avatar name={autorNombre} /> 
        </div>
    );
};

function Table_I() {
    const [empresas, setEmpresas] = useState<Empresa[]>([]);
    const [cargando, setCargando] = useState(true);

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
            <div className="table-empresa">

                <DataTable
                    value={empresas}
                    tableStyle={{ minWidth: '50rem' }}
                    paginator 
                    rows={10} 
                    emptyMessage="No hay empresas registradas"
                    className="tabla-empresa"
                    paginatorClassName="mi-paginador-personalizado" 
                >

                    <Column field="co_emp" header="RIF"></Column>
                    <Column field="nb_emp" header="Nm Organizacion"></Column>
                    <Column field="st_estado" header="Estado"></Column>
                    <Column field="fe_registro" header="Fe Registro"></Column>
                    
                    {/* 👇 Columna del Autor con el Body Template */}
                    <Column 
                        field="autor" 
                        header="Autor" 
                        body={autorBodyTemplate} // ✨ Usamos la función aquí
                    ></Column>
                </DataTable>
            </div>
            {/* El Avatar que estaba fuera del DataTable lo he removido ya que va dentro de la columna */}
        </>
    )
}

export default Table_I;