import { useContext } from 'react'
import { FashoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import './CardWidget.css'

export const CardWidget = () => {

    const { cart, totalCantidad } = useContext(CartContext)
    return (
        <Link to="/cart" className={`cart-widget ${cart.lenght > 0 ? 'cart-widget-active' : ''}`}>
            <FashoppingCart/>
            <span>{totalCantidad()}</span>
        </Link>
    )
}
export default CartWidget