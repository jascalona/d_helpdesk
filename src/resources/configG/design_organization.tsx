import Inputs from '../component/inputs';
import BasicSwitches from '../component/Switch';
import '../../assets/CSS/desing_organiza.css'

function DesingOrgan() {
    return (
        <>
            <div className="recent-projects">

                <div className="container-empresa">
                    <div className="section-header">
                        <h2>Diseño Organizacional</h2>
                    </div>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam impedit similique voluptatibus recusandae corporis? Quidem aliquid facilis voluptates illum natus sed. Quo velit et nemo repellendus expedita aliquam esse maiores.</small>

                    <div className="card-empresa">
                        <div className="header-card-empresa">
                            <h3>Crear Organizacion!</h3>
                        </div>

                        <div className="body-empresa">
                            <div className="text-empresa">

                                <Inputs label='Numero de RIF' placeholder='Por ejemplo, J1234567890' />
                                <br />
                                <Inputs label='Nombre de la Organizacion' placeholder='Por ejemplo, Soluciones Sycom' />
                            </div>
                            <BasicSwitches />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default DesingOrgan