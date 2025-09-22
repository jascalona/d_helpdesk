import { useState } from "react";
import Avatar from '../avatar';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';


interface data {
    title: string,
    date: string,
    id: string,
    desc: string,
    autor: string
}

function ItemActividadesRecientes({ title, date, id, desc, autor }: data) {
    return (
        <>
            <div className="table-tabs">

                <div className="task-item">
                    <div className="content-task">

                        <div className="text-task">
                            <div className="icon" style={{ marginRight: 10 }}>
                                <PivotTableChartIcon />
                            </div>

                            <div className="text">
                                <h3>{title} - <small>{date}</small></h3>
                                <span><strong>{id}</strong> - {desc}</span>
                            </div>
                        </div>

                        <div className="description-create">
                            <small style={{ marginRight: 10 }}>Creado por:</small>
                            <Avatar name={autor}/>
                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}
export default ItemActividadesRecientes