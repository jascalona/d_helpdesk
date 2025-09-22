import { useState } from "react"

import InfoIcon from '@mui/icons-material/Info';
import Avatar from '../avatar'


interface data {
    title: string,
    id: string,
    desc: string,
      
}

function ItemAsignaciones() {

    return (
        <>
            <div className="table-tabs">
                <span style={{ fontWeight: 800, fontSize: '12px' }}>EN LA ULTIMA SEMANA</span>


                <div className="task-item">
                    <div className="content-task">

                        <div className="text-task">
                            <div className="icon" style={{ marginRight: 10 }}>
                                <InfoIcon />
                            </div>


                            <div className="text">
                                <h3>Migracion BD4</h3>
                                <span><strong>123456</strong> - Soporte de migracion de BD V4</span>
                            </div>
                        </div>

                        <div className="description-create">
                            <small style={{ marginRight: 10 }}>Creado por:</small>
                            <Avatar />
                        </div>

                    </div>
                </div>


            </div>

        </>
    )

}

export default ItemAsignaciones