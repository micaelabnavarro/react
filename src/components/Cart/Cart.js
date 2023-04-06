import { CartContext } from "../context/CartContext"
import { useContext } from "../../components/context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarCarrito } = useContext(CartContext)

    if (cart.lenght === 0) {
        return (
            <div className="container my-5">
            <h2>No tienes productos agregados</h2>
            <hr />
            <Link to="/" className="btn btn-primary">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr />

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.name}</h4>
                        <img src={prod.img} alt={prod.name} />
                        <small>Cantidad: {prod.cantidad}</small>
                        <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                        <buttom onClick={ () => eliminarCarrito(prod.id)} className="btn btn-danger"><BsFillTrashFill/></buttom>
                        <hr />

                    </div>
                ))
            }
            <h3>TOTAL: ${totalCompra().toFixed(2)}</h3>
            <button onClick={vaciarCarrito}className="btn btn-danger">Vaciar carrito</button>
            <Link className="btn btn-seccess" to="/Checkout">Terminar mi compra</Link>
        </div >
    )
}

export default Cart