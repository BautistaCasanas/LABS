import { useState } from 'react'
import './Card.css'
// import './App.css'


const Card = ({ title, description, imageUrl,format }) => {

    const [prendido, setPrendido] = useState(false);

    const handleClick = () => {
        setPrendido(!prendido);
    }

    const showMassageFromHandler = (prendido) => {
        if(prendido) return "Encedido"
        return "Apagado"
    };
        
    return (
        <>
        {/*Quiero una card con estilos Con estilos lo quiero con boostrap*/}

        <div className="card" style={{ width: '18rem' }}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h5>{format}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <button onClick={() =>handleClick() } className="btn btn-primary">{showMassageFromHandler(prendido)}</button>
            </div>
        </div>

       </>
    )
}

export default Card;
