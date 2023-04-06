import { useState } from "react"


const ItemCount = ( {max, cantidad, setCantidad, onAdd} ) => {
    
    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div className="my-3">
            <buttom 
            onClick={handleRestar} 
            className={`btn boton ${cantidad === 1 ? "btn-outline-danger" : "bnt-outline-primary"}`}
            disabled= {cantidad === 1}
            >
            -
            </buttom>
            <span className="mx-2">{cantidad}</span>

            <buttom 
            onClick={handleSumar} 
            className={`btn ${cantidad === max ? "btn-danger" : "bnt-primary"}`}
            >
            +
            </buttom>
            <br/>
            <buttom onClick={onAdd} className="btn bnt-success my-2">Agregar al carrito</buttom>
        </div>
    )
}

export default ItemCount