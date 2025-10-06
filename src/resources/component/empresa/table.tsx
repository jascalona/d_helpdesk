import { useState, useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext'; // Importado
import { FilterMatchMode } from 'primereact/api'; // Importado
import axios from 'axios';
import Avatar from '../../avatar'; 

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
            <span>{autorNombre}</span> 
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

    // 🌟 FUNCION CORREGIDA
    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        
        // 1. Crea una copia inmutable del objeto de filtros
        let _filters = { ...filters }; 

        // 2. Asigna el nuevo valor a la COPIA (_filters)
        // El valor de 'value' es de tipo 'string', lo cual es válido aquí.
        _filters['global'].value = value; 

        // 3. Actualiza el estado de los filtros para que DataTable reaccione
        setFilters(_filters);
        
        // 4. Actualiza el valor del input para que esté controlado
        setGlobalFilterValue(value);
    };
    // 🌟

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
            <div className="p-input-icon-left" style={{ marginBottom: '1rem' }} >
                <i className="pi pi-search" />
                <InputText 
                    value={globalFilterValue} 
                    onChange={onGlobalFilterChange} 
                    placeholder="Buscar..." 
                />
            </div>
            {/* --- */}
            
            <div className="table-empresa">
                <DataTable
                    value={empresas}
                    tableStyle={{ minWidth: '50rem' }}
                    paginator 
                    rows={10} 
                    emptyMessage="No hay empresas registradas"
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