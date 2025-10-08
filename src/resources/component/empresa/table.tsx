import { useState, useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import { Button } from 'primereact/button'; //
import * as XLSX from 'xlsx'; // 
import axios from 'axios';
import Avatar from '../../avatar';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

interface Empresa {
    co_emp: string;
    nb_emp: string;
    st_estado: string;
    fe_registro: string;
    autor: string;
}

// Definición inicial de filtros para el DataTable
const initialFilters = {
    // El valor puede ser 'string' o 'null'
    global: { value: null as string | null, matchMode: FilterMatchMode.CONTAINS },
};

// Función para renderizar el Avatar y el nombre en la celda
const autorBodyTemplate = (rowData: Empresa) => {
    const autorNombre = rowData.autor;

    return (
        <div className="flex align-items-center gap-2">
            <Avatar name={autorNombre} />
        </div>
    );
};

function Table_I() {
    const [empresas, setEmpresas] = useState<Empresa[]>([]);
    const [cargando, setCargando] = useState(true);
    // Estado para manejar los filtros de la tabla
    const [filters, setFilters] = useState(initialFilters);
    // Estado para el valor del campo de búsqueda (controlado)
    const [globalFilterValue, setGlobalFilterValue] = useState('');

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

    // FUNCION PARA EXPORTAR A EXCEL
    const exportExcel = () => {
        // Mapear los datos a un formato más legible si es necesario,
        // o simplemente usa el arreglo de empresas.
        const dataForExport = empresas.map(emp => ({
            "RIF": emp.co_emp,
            "Nombre Organizacion": emp.nb_emp,
            "Estado": emp.st_estado,
            "Fecha Registro": emp.fe_registro,
            "Autor": emp.autor,
        }));

        const worksheet = XLSX.utils.json_to_sheet(dataForExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Empresas");

        XLSX.writeFile(workbook, "empresas_data.xlsx");
    };

    // FUNCION CORREGIDA
    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);

        setGlobalFilterValue(value);
    };

    // Campos en los que se aplicará la búsqueda global
    const globalFilterFields = [
        'co_emp',
        'nb_emp',
        'st_estado',
        'fe_registro',
        'autor'
    ];

    if (cargando) return <p>Cargando registros...</p>;

    return (
        <>
            {/* Input de Búsqueda Global (Fuera del DataTable) */}
            <div className="p-input-icon-left" >
                <i className="pi pi-search" />
                <InputText style={{ background: '#fffffff6', border: 'solid 1px #7776b352', padding: 10, borderRadius: 5, color: '#333', width: '300px', outline: 'none' }}
                    value={globalFilterValue}
                    onChange={onGlobalFilterChange}
                    placeholder="Buscar..."
                />
            </div>

            <div className="table-empresa">
                <div className="options">
                    <div className="h">
                        <h2>Organizaciones</h2>
                        <small style={{ fontSize: '12px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, aliquam!</small>
                    </div>
                    <div className="group-btn">
                        {/*  BOTON DE DESCARGA AGREGADO AQUÍ */}
                        <Button style={{ fontSize: '20px', padding: '7px' }}
                            type="button"
                            icon="pi pi-file-excel"
                            className="p-button-success"
                            onClick={exportExcel}
                            disabled={empresas.length === 0} // Desactivar si no hay datos
                        ><FileDownloadIcon sx={{ fontSize: 15 }} /></Button>
                    </div>
                </div>

                <DataTable
                    value={empresas}
                    tableStyle={{ minWidth: '50rem' }}
                    paginator
                    rows={10}
                    emptyMessage="No se encontraron registros relacionados"
                    className="tabla-empresa"
                    paginatorClassName="mi-paginador-personalizado"
                    // Propiedades para el filtro global
                    filters={filters} // Se pasa el objeto de filtros actualizado
                    globalFilterFields={globalFilterFields} // Se indican las columnas a filtrar
                >
                    <Column field="co_emp" header="RIF"></Column>
                    <Column field="nb_emp" header="Nm Organizacion"></Column>
                    <Column field="st_estado" header="Estado"></Column>
                    <Column field="fe_registro" header="Fe Registro"></Column>
                    <Column
                        field="autor"
                        header="Autor"
                        body={autorBodyTemplate}
                    ></Column>
                </DataTable>
            </div>
        </>
    )
}

export default Table_I;