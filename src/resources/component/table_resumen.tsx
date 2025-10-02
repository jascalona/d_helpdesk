import { useState } from "react";
import Avatar from "../avatar";

interface dateResumen{
    emisor: string,
    actividad: string,
    estado: string,
    date: string,
}

function ActividadesOrganizacion({emisor, actividad, estado, date}: dateResumen) {
    return (
        <>
            <div className="item-actividades">
                <div className="content-actividades">
                    <div className="emisor" style={{marginRight: 20}}>
                        <Avatar name={emisor} />
                    </div>

                    <div className="text-content">
                        <p><strong>{emisor}</strong> {estado} <strong> {actividad}</strong></p>
                        <span style={{fontSize: '11px'}}>El {date}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ActividadesOrganizacion