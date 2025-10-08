import '../../assets/CSS/desing_organiza.css'
import { Link, } from 'react-router-dom';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import WorkspacesIcon from '@mui/icons-material/Workspaces';


function DesingOrgan() {
    return (
        <>
            <h1>Configuracion General</h1>

            <div className="recent-projects">
                <div className="section-header">
                </div>
                <p>Diseño Organizacional</p>
            </div>
            <div className="recent-projects">

                <div className="container-cards-setting">


                    <article className='card-setting'>
                        <Link to="/ConfigGeneral/CreateEmpresa" style={{ fontSize: '14px', color: '#123336' }}>
                            <div className="card-header-setting">

                                <div className="icon-card">
                                    <span><AddBusinessIcon sx={{ fontSize: 28 }} /></span>
                                </div>

                                <div className="title">
                                    <h3>Nueva Organizacion</h3>
                                    <small>Crea una nueva organizacion</small>
                                </div>
                            </div>

                            <div className="descripton-setting">
                                <p style={{ fontWeight: 300 }}>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Repellat, eos?</p>
                            </div>
                        </Link>
                    </article>

                    <article className='card-setting'>
                        <Link to="/ConfigGeneral/CreateArea" style={{ fontSize: '14px', color: '#123336' }} >
                            <div className="card-header-setting">


                                <div className="icon-card">
                                    <span><AdsClickIcon sx={{ fontSize: 28 }} /></span>
                                </div>

                                <div className="title">
                                    <h3>Crear Area</h3>
                                    <small>Crea una nueva Area</small>
                                </div>
                            </div>

                            <div className="descripton-setting">
                                <p style={{ fontWeight: 300 }}>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Repellat, eos?</p>
                            </div>
                        </Link>
                    </article>

                    <article className='card-setting'>
                        <Link to="/sub-area" style={{ fontSize: '14px', color: '#123336' }} >

                            <div className="card-header-setting">

                                <div className="icon-card">
                                    <span><WorkspacesIcon sx={{ fontSize: 28 }} /></span>
                                </div>

                                <div className="title">
                                    <h3>Nueva Sub-area</h3>
                                    <small>Crea una nueva sub-area</small>
                                </div>
                            </div>

                            <div className="descripton-setting">
                                <p>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Repellat, eos?</p>
                            </div>
                        </Link>
                    </article>


                    <article className='card-setting'>
                        <Link to="/Otros" style={{ fontSize: '14px', color: '#123336' }} >

                            <div className="card-header-setting">
                                <div className="icon-card">
                                    <span><AddBusinessIcon sx={{ fontSize: 28 }} /></span>
                                </div>

                                <div className="title">
                                    <h3>Otros...</h3>
                                    <small>Crea una nueva organizacion</small>
                                </div>
                            </div>

                            <div className="descripton-setting">
                                <p>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Repellat, eos?</p>
                            </div>
                        </Link>
                    </article>
                </div>

            </div>


        </>
    )
}
export default DesingOrgan