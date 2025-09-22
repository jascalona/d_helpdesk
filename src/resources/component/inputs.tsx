import type Input from "@mui/material/Input"
import '../../assets/CSS/componentes.css';

interface options{
    label: string;
    placeholder: string;
}

function Inputs({label, placeholder} :options){

    return(
        <>
            <div className="content-input">
                <label htmlFor="" className="label">{label}</label>
                <input type="text" placeholder={placeholder}/>
            </div>
        </>
    )
}

export default Inputs