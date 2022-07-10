import {useState} from 'react';

function Toolbar(props){

    
    const [windows, changeState] = useState(true);
    const handleChange = () =>{
        changeState(!windows);
        const ventana = document.getElementById(props.identificador);
        const caja = document.getElementById("caja-"+props.identificador);
        const cajaHermano= document.getElementById("caja-"+props.bro[0]);
        if(windows){
            ventana.className = "fa-solid fa-down-left-and-up-right-to-center";
            caja.className = props.caja + " maximizar";
            cajaHermano.className = props.bro[1] + " cerrar";
        }
        else {
            ventana.className="fa-solid fa-maximize";
            caja.className = props.caja + " minimizar"
            cajaHermano.className = props.bro[1] + " abrir";
        }
    }

    
    return (
        <div className="d-flex justify-content-between align-items-center barra">
            <h5 id="title"><i className="fa-brands fa-free-code-camp"></i>{props.titulo}</h5>
            <i id={props.identificador} className="fa-solid fa-maximize" onClick={handleChange}></i>
        </div>
    );

}
export default Toolbar;